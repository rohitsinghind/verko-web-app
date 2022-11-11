import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';



export default function InfiniteSpace({ dataLength, onLoadMore, loading, scrollableTarget, childern = <></>, inverse = false, style = {} }) {
    return (
        <InfiniteScroll
            dataLength={dataLength}
            next={onLoadMore}
            hasMore={true}
            inverse={inverse}
            style={style}
            loader={
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress
                        color="inherit"
                        size={loading ? 20 : 0}
                    />
                </Box>
            }
            scrollableTarget={scrollableTarget}
        >
            {childern}
        </InfiniteScroll>
    );
}
