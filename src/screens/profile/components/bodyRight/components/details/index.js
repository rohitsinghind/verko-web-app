import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import ArticleIcon from '@mui/icons-material/Article';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';


export default function Details({ data }) {

  return (
    <>
      <Stack m={4} spacing={3} >
        <Stack direction="row" spacing={2} alignItems='center' >
          <ArticleIcon />
          <Stack spacing={1} >
            <Typography variant="h4">
              About
            </Typography>
            <Typography >{data?.about}</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} alignItems='center' >
          <BusinessIcon />
          <Stack spacing={1} >
            <Typography variant="h4">
              Company
            </Typography>
            <Typography>{(data?.companyName === undefined) ? "" : data?.companyName}</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} alignItems='center' >
          <BusinessIcon />
          <Stack spacing={1} >
            <Typography variant="h4">
              Address
            </Typography>
            <Typography >{data?.location?.city + ", " + data?.location?.state}</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} alignItems='center' >
          <LocationOnIcon />
          <Stack spacing={1} >
            <Typography variant="h4">
              Pincode
            </Typography>
            <Typography >{data?.location?.pinCode}</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} alignItems='center' >
          <LanguageIcon />
          <Stack spacing={1} >
            <Typography variant="h4">
              Languages I Speak
            </Typography>
            <Typography >{(data?.language === undefined) ? "" : data?.language}</Typography>
          </Stack>
        </Stack>

      </Stack>
    </>
  )
}
