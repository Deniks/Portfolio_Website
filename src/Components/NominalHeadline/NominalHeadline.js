import React from 'react'

import { Box, Heading } from 'grommet';
export default function NominalHeadline() {
    return (
        <div>
            <Box>
                <Heading margin="none" style={{fontWeight: "bold"}}>
                    Hi, I'm Deniss
                </Heading>
                <Heading level={3} margin="none" color="grey">
                    I develop full-stack desktop software, websites and mobile applications
                </Heading>
            </Box>
        </div>
    )
}
