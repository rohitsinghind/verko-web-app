import { all, fork } from 'redux-saga/effects';

import { watchLogin } from './authSaga';
import {
    watchProfileDetails,
    watchGetUsers,
    watchGetNotFollowedUsers,
    watchTestFollow,
    watchFollow
} from './profileSaga';
import {
    watchCreatePosts,
    watchChangePostStatus,
    watchUpdatePosts,
    watchGetPosts,
    watchClearPosts,
    watchGetPostComments,
    watchPostReact,
    watchPostComment,
    watchGetUserPosts,
    watchGetNotLikedPosts,
    watchTestReact,
} from './postSaga';
import {
    watchGetNotifications,
    watchReadNotification,
    watchDeleteNotifcation,
} from './notificationSaga';
import {
    watchGetDiscussionPosts,
    watchGetDiscussionComments,
    watchDiscussionComment,
    watchDiscussionReact,
    watchGetUserDiscussion,
    watchCreateDiscussion,
    watchUpdateDiscussion,
    watchChangeDiscussionStatus,
} from './discussionSaga';
import {
    watchGetChats,
    watchGetMessages,
    watchClearChats,
    watchClearMessages
} from './chatSaga';

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchFollow),
        fork(watchGetUsers),
        fork(watchProfileDetails),
        fork(watchGetNotFollowedUsers),
        fork(watchTestFollow),
        fork(watchGetNotLikedPosts),
        fork(watchTestReact),
        fork(watchCreatePosts),
        fork(watchChangePostStatus),
        fork(watchUpdatePosts),
        fork(watchGetPosts),
        fork(watchGetUserPosts),
        fork(watchPostReact),
        fork(watchPostComment),
        fork(watchGetPostComments),
        fork(watchGetChats),
        fork(watchGetMessages),
        fork(watchClearChats),
        fork(watchClearMessages),
        fork(watchGetDiscussionPosts),
        fork(watchGetUserDiscussion),
        fork(watchGetDiscussionComments),
        fork(watchCreateDiscussion),
        fork(watchUpdateDiscussion),
        fork(watchChangeDiscussionStatus),
        fork(watchDiscussionComment),
        fork(watchDiscussionReact),
        fork(watchClearPosts),
        fork(watchGetNotifications),
        fork(watchReadNotification),
        fork(watchDeleteNotifcation),
    ]);
}
