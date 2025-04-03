import React, { useState, useEffect } from 'react';
import { Box, Button, Text, VStack, Heading, List, ListItem } from '@chakra-ui/react';
import axios from 'axios';

const UselessCounter = () => {
  const [count, setCount] = useState(0);
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetchEntities();
  }, []);

  const fetchEntities = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/entities');
      setEntities(response.data);
    } catch (error) {
      console.error('Error fetching entities:', error);
    }
  };

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <Box p={8}>
      <VStack spacing={6}>
        <Heading>The Most Useless Counter</Heading>
        
        <Box textAlign="center">
          <Text fontSize="6xl">{count}</Text>
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleClick}
            mt={4}
          >
            Click me (it's useless)
          </Button>
        </Box>

        <Box width="100%">
          <Heading size="md" mb={4}>Available Entities</Heading>
          <List spacing={3}>
            {entities.map(entity => (
              <ListItem key={entity.id} p={2} bg="gray.100" borderRadius="md">
                {entity.name}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Box>
  );
};

export default UselessCounter;