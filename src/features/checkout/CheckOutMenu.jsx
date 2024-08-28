import { useForm } from 'react-hook-form';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import RadioInput from '../../ui/RadioInput';
import Text from '../../ui/Text';

export default function CheckOutMenu() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to API
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-8 px-8 py-12 rounded-[0.5rem] bg-white w-full mx-auto">
      <Heading as="h3" className="text-start w-full">
        CHECKOUT
      </Heading>
      <form
        className="flex flex-col gap-8 items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4 items-start justify-center">
          <Text type="subtitle">Billing details</Text>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              heading="Name"
              holder="Alexei Ward"
              error={errors.name?.message}
              {...register('name', { required: 'Name is required' })}
            />
            <Input
              heading="Email Address"
              holder="alexei@mail.com"
              error={errors.email?.message}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>
          <Input
            heading="Phone Number"
            holder="+1 202-555-0136"
            error={errors.phone?.message}
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[+]?\d{1,4}[-\s.]?\d{1,14}$/,
                message: 'Invalid phone number',
              },
            })}
          />
        </div>

        <div className="flex flex-col gap-4 items-start justify-center">
          <Text type="subtitle">Payment details</Text>

          <div className="grid grid-flow-row sm:grid-cols-2 items-start w-full gap-4">
            <p className="font-bold text-[0.75rem]">Payment Method</p>
            <div className="flex gap-4 flex-col w-full">
              <RadioInput
                heading="e-Money"
                {...register('paymentMethod', {
                  required: 'Payment method is required',
                })}
                value="e-Money"
              />
              <RadioInput
                heading="Cash on Delivery"
                {...register('paymentMethod', {
                  required: 'Payment method is required',
                })}
                value="Cash on Delivery"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              heading="e-Money Number"
              holder="238521993"
              error={errors.eMoneyNumber?.message}
              {...register('eMoneyNumber', {
                required: 'e-Money number is required',
              })}
            />
            <Input
              heading="e-Money PIN"
              holder="6891"
              error={errors.eMoneyPin?.message}
              {...register('eMoneyPin', {
                required: 'e-Money PIN is required',
              })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-btn-x py-btn-y text-[0.8125rem] uppercase font-bold bg-primary text-white hover:bg-secondary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
