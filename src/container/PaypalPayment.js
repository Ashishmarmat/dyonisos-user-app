import React, { Component } from 'react'
import {
    View,
    ActivityIndicator
} from 'react-native'
import axios from 'axios'
import qs from 'qs';
import { WebView } from 'react-native-webview';
import { BaseUrl } from '../constants/api';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from "react-native-router-flux";

export default class PaypalPayment extends Component {

    state = {
        accessToken: null,
        approvalUrl: null,
        paymentId: null,
        token: "",
        isLoading:false
    }

   async componentDidMount() {
        // let currency = '1 USD'
        // currency.replace(" USD", "")
        console.log("this.props paypalpayment", this.props);
        const {navigateParams} = this.props;
        const token = await AsyncStorage.getItem('token');
        console.log(token)
            this.setState({
                token:token
            });
        if(navigateParams && navigateParams.amount){
            const dataDetail = {
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "transactions": [{
                    "amount": {
                        "total": navigateParams.amount.toString(),
                        "currency": "INR",
                        // "details": {
                        //     "subtotal": currency,
                        //     "tax": "0",
                        //     "shipping": "0",
                        //     "handling_fee": "0",
                        //     "shipping_discount": "0",
                        //     "insurance": "0"
                        // }
                    }
    
                }],
                "redirect_urls": {
                    "return_url": "https://example.com",
                    "cancel_url": "https://example.com"
                }
            }
            this.setState({
                isLoading:true
            })
    
            axios.post('https://api.sandbox.paypal.com/v1/oauth2/token',  qs.stringify({'grant_type':'client_credentials'}),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic QWFUVEg4NzZ6R1hISFU0UlkyM2VFX3EwU1M1MFE0cjJGNGN0a3UzS0lFQjBmblNuMzZ2a0NVZ0VzSk5UOWFaZGk2M1lwcmh4Wm14Wk1UQ1E6RU5zdjRLdDhwSFE1U25YSE1NZGVPdGFDYXZPSkx3OG91ZnM2SFZxTUYybXhxWk9YaGE5b2lKZUVTTDFrNkhocHhPemRCRGlnaGFOR3ZnVWY='
                    }
                }
            )
                .then(response => {
                    console.log("response token",response);
                    this.setState({
                        accessToken: response.data.access_token
                    })
    
                    axios.post('https://api.sandbox.paypal.com/v1/payments/payment', dataDetail,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${this.state.accessToken}`
                            }
                        }
                    )
                        .then(response => {
                            console.log("response payment",response);
                            const { id, links } = response.data
                            const approvalUrl = links.find(data => data.rel == "approval_url")
    
                            this.setState({
                                isLoading: false,
                                paymentId: id,
                                approvalUrl: approvalUrl.href
                            })
                        }).catch(err => {
                            console.log({ ...err })
                        })
                }).catch(err => {
                    console.log({ ...err })
                })
        }
        
    }

    _onNavigationStateChange = (webViewState) => {
        console.log("webViewState",webViewState)
        if (webViewState.url.includes('https://example.com/')) {

            this.setState({
                approvalUrl: null
            })

            // const { PayerID = "6YMCG4ND4RYLY", paymentId = "PAYID-L5JXDNQ5HC90708UW802713H" } = webViewState.url
            // const { PayerID, paymentId } = webViewState.url;
            var new_str = webViewState.url.split("paymentId=")[1];
            const PayerID = new_str.split("PayerID=")[1];
            const paymentId = new_str.split("&token")[0];
            console.log("paymentId",new_str.split("&token")[0])
            console.log("PayerID",new_str.split("PayerID=")[1])
            axios.post(`https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`, { payer_id: PayerID },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.state.accessToken}`
                    }
                }
            )
                .then(response => {
                    console.log("execute response",response);
                    this.callApiForTransactionDetails(response);
                    this.callApiForAdPost();

                }).catch(err => {
                    console.log({ ...err })
                })

        }
    }

      callApiForTransactionDetails = async executeResponse => {
        const user_id = await AsyncStorage.getItem('user_id');
        const {navigateParams} = this.props;
        const {token} = this.state;
        const body = JSON.parse(navigateParams.bodyParams);
        console.log("body",body);
        let featured = 0;
        let urgent = 0;
        let highlight = 0;
        if(navigateParams.transaction_description.includes("Featured")){
            featured = 1;
        }
        if(navigateParams.transaction_description.includes("Urgent")){
            urgent = 1;
        }
        if(navigateParams.transaction_description.includes("Highlight")){
            highlight = 1;
        }
        var date = new Date(executeResponse.data.create_time);
        var timestamp = date.getTime();
        var d = new Date(timestamp);
        console.log("d",d);
        console.log("date",date.dateP);
        console.log("timestamp",timestamp);
        console.log("timestamp",typeof(timestamp));
        const convertedTime = timestamp.toString();
        console.log("convertedTime",convertedTime);
        console.log("convertedTime",typeof(convertedTime));
        const requestParams = {
            "product_name":body.job_name,
            "product_id":body.category_id.toString(),
            "seller_id":user_id,
            "amount":navigateParams.amount.toString(),
            "featured":featured.toString(),
            "urgent":urgent.toString(),
            "highlight":highlight.toString(),
            "status":"success",
            "transaction_gateway":"paypal",
            "transaction_ip":"",
            "transaction_description":navigateParams.transaction_description,
            "transaction_method":""
        }
        
        console.log("token",token);
        console.log("requestParams",requestParams);
        
        await fetch(BaseUrl + '/payment-gateway', {
            method: "Post",
            headers: new Headers({
              "Content-Type": "application/json",
            //   Accept: "application/json",
               "Authorization": 'Bearer '+ token
             }),
             body: JSON.stringify(requestParams)
          })
            .then(res => res.json())
            .then(response => {
              console.log("callApiForTransactionDetails response", response)
            })
            .catch(error => console.log(error));
    }

    callApiForAdPost = async () => {
        const {navigateParams} = this.props;
        this.setState({
            isLoading:true
        })
     await fetch(BaseUrl + '/post-job', {
          method: "Post",
          headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
             "Authorization": 'Bearer '+ this.state.token
           }),
           body: navigateParams.bodyParams
        })
          .then(res => res.json())
          .then(response => {
            console.log("postjob", response)
            if (response.status === true) {
                this.setState({ isLoading: false })
                this.props.navigation.navigate('SucessfullyPost');
            } else {
               this.setState({ isLoading: false });
            }
          })
          .catch(error => console.log(error));
    }

    render() {

        const { approvalUrl, isLoading } = this.state
        return (
            <View style={{ flex: 1 }}>
                {
                    approvalUrl ? <WebView
                        style={{ height: 400, width: 300 }}
                        source={{ uri: approvalUrl }}
                        onNavigationStateChange={this._onNavigationStateChange}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={false}
                        style={{ marginTop: 20 }}
                    /> : <ActivityIndicator />
                }
                {isLoading && <ActivityIndicator />}
            </View>
        )
    }
}