import { Title, Text, Badge, SimpleGrid, MultiSelect, Chip } from '@mantine/core';
import useStyles from './encryption.styles';

const data = [
  { value: 'nric', label: 'NRIC' },
  { value: 'name', label: 'Name' },
  { value: 'address', label: 'Address' },
  { value: 'email', label: 'Enail' },
];

const Encryption = () => {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Mantine
        </Text>
      </Title>
      <SimpleGrid cols={5}>
        <Badge>Badge</Badge>
        <Badge>Badge</Badge>
        <Badge>Badge</Badge>
        <Badge>Badge</Badge>
        <Badge>Badge</Badge>
      </SimpleGrid>
      <SimpleGrid cols={3}>
        <MultiSelect
          data={data}
          label="Field to be Anonymized"
          placeholder="Pick values to be Anonymized"
        />
      </SimpleGrid>
      <SimpleGrid cols={3}>
        <Chip defaultChecked>Awesome chip</Chip>
      </SimpleGrid>
    </>
  );
};

export default Encryption;