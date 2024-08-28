import Input from '../../ui/Input';
import Text from '../../ui/Text';

export default function BellingDetails() {
  return (
    <div className="flex flex-col gap-4 items-start justify-center">
      <Text type="subtitle">Billing details</Text>
      <div className="flex flex-col sm:flex-row gap-4">
        <Input heading="Name" holder="Alexei Ward" />
        <Input heading="Email Address" holder="alexei@mail.com" />
      </div>
      <Input heading="Phone Number" holder="+1 202-555-0136" />
    </div>
  );
}
