export const ROUTES = {
    HOME: 'some/where/in/www/home',
    DISCUSSIONS: 'some/where/in/www/discussions',
    CHATS: 'some/where/in/www/chats',
    NOTIFICATIONS: 'some/where/in/www/notifications',
    PROFILE: 'some/where/in/www/profile',
    LOGIN: 'some/where/in/www/login',
    USERS: 'some/where/in/www/users',
    POSTS: 'some/where/in/www/posts',
    POST_DETAILS: 'some/where/in/www/postsdetails',
    NOT_LIKED_POSTS: 'some/where/in/www/nlp',
    NOT_FOLLOWED_USERS: 'some/where/in/www/nfu',
}

export const SOURCE_TYPE = {
    COMMENT: 'Comments',
    DISCUSSION_COMMENT: 'DiscussionComments',
    DISCUSSION_POST: 'DiscussionPosts',
    DISCUSSION_REACTION: 'DiscussionReactions',
    FOLLOWERS: 'Followers',
    USER: 'Users',
    LEAD: 'Leads',
    LOAN_PROVIDERS: 'LoanProviders',
    POST: 'Posts',
    POST_REACTION: 'PostReactions',
}

export const NOTIFICATION_TYPE = {
    MISC: '90',
    PROFILE_INCOMPLETE: '100',
    POST_COMMENT: '101',
    POST_REACT: '102',
    FOLLOW: '103',
    PROFILE_VIEW: '104',
    MESSAGE: '105',
    DISCUSSION_COMMENT: '106',
    DISCUSSION_REACT: '107',
    DISCUSSION_COMMENT_REPLY: '108',
    TRENDING_POST: '109',
    TRENDING_DISCUSSION: '110',
};

export function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

export function notificationTypeColor(type) {
    switch (JSON.stringify(type)) {
        case NOTIFICATION_TYPE.POST_COMMENT:
        case NOTIFICATION_TYPE.DISCUSSION_COMMENT:
            return '#ffcdd2'
        case NOTIFICATION_TYPE.POST_REACT:
        case NOTIFICATION_TYPE.DISCUSSION_REACT:
            return '#e1bee7'
        case NOTIFICATION_TYPE.FOLLOW:
            return '#bbdefb'
        case NOTIFICATION_TYPE.PROFILE_INCOMPLETE:
            return '#e53935';
        case NOTIFICATION_TYPE.PROFILE_VIEW:
            return '#fff9c4';
        case NOTIFICATION_TYPE.MESSAGE:
            return '#43a047';
        case NOTIFICATION_TYPE.TRENDING_POST:
        case NOTIFICATION_TYPE.TRENDING_DISCUSSION:
            return '#43a047';
        case NOTIFICATION_TYPE.MISC:
            return '#43a047';
        default:
            return '#43a047';
    }
}
