import React, { useState } from "react";

import { Avatar, Button, Card, Stack, Typography } from "@mui/material";

import { styles } from './styles'
import { FOLLOW_START } from "store/actions";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
export default function UserItem({ item }) {
    const { enqueueSnackbar } = useSnackbar();

    const { _id, image, firstName, username, lastName, postCount, followers, following, userType, location, locationIDs, isFollowing } = item;

    const [loading, setLoading] = useState(false);
    const getUserType = (userType) => {
        let st = '';
        switch (userType) {
            case 2:
                st = 'Home Owner'
                break;
            case 3:
                st = 'Service Provider'
                break;
            case 4:
                st = 'Material Supplier'
                break;
            default:
                break;
        }
        return st;
    }

    const getLocation = (userType) => {
        let st = '';
        switch (userType) {
            case 2:
                if (location?.name) {
                    st = location?.name
                }
                break;
            case 3:
                if (locationIDs && Array.isArray(locationIDs) && locationIDs.length > 0 && locationIDs[0].name) {
                    st = locationIDs[0].name
                }
                break;
            case 4:
                if (locationIDs && Array.isArray(locationIDs) && locationIDs.length > 0 && locationIDs[0].name) {
                    st = locationIDs[0].name
                }
                break;
            default:
                break;
        }
        return st;
    }
    const dispatch = useDispatch();

    const onFollow = (e) => {
        e.stopPropagation();
        setLoading(true);
        dispatch({
            type: FOLLOW_START,
            params: {
                userID: _id
            },
            callBack: (err, suc) => {
                setLoading(false);
                if (suc) {
                    enqueueSnackbar('Done', { variant: 'success' });
                } else {
                    enqueueSnackbar('Something went wrong', { variant: 'error' });
                }
            }
        });

    };

    return (
        <Card sx={styles.main} onClick={() => window.open(username || _id, "_blank")}>
            <Stack sx={styles.box}>
                <Avatar
                    src={image || ''}
                    sx={styles.userImg}
                    aria-label="recipe">
                    R
                </Avatar>
                <Typography sx={styles.name}>
                    {`${firstName || username || _id || '-'} ${lastName || ''}`}
                </Typography>
                <Stack direction="row" spacing={1} divider={<div>|</div>} sx={styles.locUserType} alignItems='center'>
                    <Stack alignItems={getLocation(userType) ? 'end' : 'center'} sx={styles.flex1}>
                        <Typography sx={styles.usertype}>
                            {getUserType(userType)}
                        </Typography>
                    </Stack>
                    {getLocation(userType) ? <Stack alignItems='start' sx={styles.flex1}>
                        <Typography sx={styles.usertype}>
                            {getLocation(userType)}
                        </Typography>
                    </Stack> : null}
                </Stack>
                <Stack direction="row" sx={styles.counts} alignItems='center'>
                    <Stack alignItems='center' sx={styles.flex1}>
                        <Typography sx={styles.count}>
                            {postCount || 0}
                        </Typography>
                        <Typography sx={styles.countText}>
                            POSTS
                        </Typography>
                    </Stack>
                    <Stack alignItems='center' sx={styles.flex1}>
                        <Typography sx={styles.count}>
                            {followers}
                        </Typography>
                        <Typography sx={styles.countText}>
                            FOLLOWERS
                        </Typography>
                    </Stack>
                    <Stack alignItems='center' sx={styles.flex1}>
                        <Typography sx={styles.count}>
                            {following}
                        </Typography>
                        <Typography sx={styles.countText}>
                            FOLLOWINGS
                        </Typography>
                    </Stack>
                </Stack>
                <Button
                    onClick={onFollow}
                    variant={isFollowing ? "outlined" : 'contained'}
                    sx={{ width: '200px' }}
                    loading={loading}
                >
                    {isFollowing ? 'Unfollow' : 'follow'}
                </Button>
            </Stack>
        </Card>
    );
}
