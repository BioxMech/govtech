import React, { useState, useEffect } from 'react';
import { SimpleGrid, Textarea } from '@mantine/core';
import styled from "styled-components";
import { template } from './text.template';


const TextStyled = styled.div`

  .disabled-textarea {
    background-color: inherit;
    color: black;
    opacity: 1;
    cursor: default;
  }
`;

const TextAnonymizer = () => {

  const [textInput, setTextInput] = useState(template); 
  const [annoyOutput, setAnnoyOutput] = useState('');

  useEffect(() => {
    const annoy: string =  textInput.replace(/[A-Z]([a-z]+|\.)(?:\s+[A-Z]([a-z]+|\.))*(?:\s+[a-z][a-z\-]+){0,2}\s+[A-Z]([a-z]+|\.)/u, "<PERSON>");
    setAnnoyOutput(annoy);
  }, [textInput])

  return (
    <TextStyled>
      <SimpleGrid cols={2}>
        <Textarea
          placeholder="Input your text here"
          label="Input Text"
          value={textInput}
          description="Text that is to be anonymized"
          onChange={(event) => setTextInput(event.currentTarget.value)}
          withAsterisk
          autosize
          minRows={6}
          maxRows={20}
        />
        <Textarea
          className='disabled-textarea'
          placeholder="Anonymized text will appear here"
          label="Anonymized Text"
          value={annoyOutput}
          description="Automatically Generated"
          withAsterisk
          disabled
          autosize
          minRows={6}
          maxRows={20}
        />
      </SimpleGrid>
    </TextStyled>
  );
}

export default TextAnonymizer;