export default {
    ONBOARDING_SCREEN: 'OnBoardingScreen',
    WAITLIST_SCREEN: 'WaitListScreen',
    CHOOSE_GENDER_SCREEN: 'ChooseGenderScreen',
    EMAIL_SCREEN: 'EmailScreen',
    DOB_SCREEN: 'DobScreen',
    LOCATION_SCREEN: 'NotificationButton',
    CITY_COUNTRY_SCREEN: 'NotificationChooseScreen',
    NOTIFICATION_SCREEN: 'NotifyScreen',
    OTP_SCREEN: 'OtpInputScreen',
    NAME_SCREEN: 'NameScreen',
    PLACEHOLDER_SCREEN: 'FirstPlaceholder',
    PASSWORD_SCREEN: "PasswordScreen",
    WELCOME_SCREEN: "WelcomeScreen",
    YOUR_PROFILE_SCREEN: "YourProfileScreen",
    EDIT_PERFECT_MATCH_SCREEN: 'EditPerfectMatchScreen',
    PERFECT_MATCH_PLACEHOLDER_SCREEN: `PerfectMatchScreen`,
    PERFECT_MATCH_AGE_SCREEN: 'PerfectMatchAgeScreen'
};

export const LOCAL_STORAGE_KEYS = {
    IS_FB_LOGIN: 'isFbLogin',
    IS_APPLE_LOGIN: 'isApplLogin',
    FACEBOOK_ID: 'facebookID',
    APPLE_ID: 'appleID',
    AUTH_TOKEN: 'TOKEN',
    GENDER: 'gender',
    CITY: 'city',
    COUNTRY: 'country',
    EMAIL_ID: 'email_id',
    PHONE: 'PHONE',
    NOTIFICATION_ENABLE: 'NOTIFICATION_ENABLE',
};

export const MIXPANEL_EVENTS = {
    REGISTERED: 'Registered',
    COMPLETED_ONBOARDING: 'Completed Onboarding',
    FEED_DISLIKE: 'the feed: disliked',
    FEED_LIKE: 'the feed: liked',
};

export const MIXPANEL_EVENT_PROPERTIES = {
    ONBOARDING_FLOW: 'Onboarding Flow',
};
