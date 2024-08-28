import Input from '../../ui/Input';
import RadioInput from '../../ui/RadioInput';
import Text from '../../ui/Text';

export default function Payment() {
  return (
    <div className="flex flex-col gap-4 items-start justify-center">
      <Text type="subtitle">payment details</Text>

      <div className="grid grid-flow-row sm:grid-cols-2  items-start w-full gap-4  ">
        <p className="font-bold text-[0.75rem]">Payment Method</p>
        <div className="flex gap-4 flex-col w-full">
          <RadioInput heading="e-Money" />
          <RadioInput heading="Cash on Delivery" />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Input heading="e-Money Number" holder="238521993" />
        <Input heading="e-Money PIN" holder="6891" />
      </div>
    </div>
  );
}
