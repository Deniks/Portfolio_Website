import React, {useState} from 'react'

import { Box, TextInput, TextArea, Select, Form, FormField, Button  } from 'grommet';

export function ContactsForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('Professional');
    const [message, setMessage] = useState('');

    return (
        <Box fill style={{maxWidth: "500px"}} alignSelf="center">
        <Form>
            <FormField name="firstName" htmlFor="firstNameTextInput" label="First Name">
                <TextInput
                    placeholder="John"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                />
            </FormField>
            <FormField name="lastName" htmlFor="lastNameTextInput" label="Last Name">
                <TextInput
                    placeholder="Doe"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                />
            </FormField>
            <FormField name="subject" htmlFor="subjectSelect" label="Subject">
                <Select
                    options={['Professional', 'Personal', 'Other']}
                    value={subject}
                    onChange={({ option }) => setSubject(option)}
                />
            </FormField>

            <FormField name="message" htmlFor="messageTextArea" label="Message">
            <TextArea
                placeholder="Hello! ..."
                value={message}
                onChange={event => setMessage(event.target.value)}
            />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
            </Box>
            </Form>
            </Box>
    )
}
