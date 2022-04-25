import { Input, InputWrapper } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

const Scheduler = () => {
  return (
    <div>
      <h1>Faça seu agendamento</h1>

      <InputWrapper id='name' required label='Nome' description='Nome Completo'>
        <Input id='name' placeholder='Maria da Silva' />
      </InputWrapper>

      <DatePicker placeholder='Pick date' label='Event date' required />
    </div>
  );
};

export default Scheduler;
