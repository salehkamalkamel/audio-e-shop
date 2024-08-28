import Input from '../../ui/Input';
import Text from '../../ui/Text';

export default function ShippingInfo() {
  return (
    <div className="flex flex-col gap-4 items-start justify-center">
      <Text type="subtitle">Shipping Info</Text>
      <Input
        heading="Your Address"
        holder="1137 Williams Avenue"
        className="sm:w-full"
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <Input heading="ZIP Code" holder="10001" />
        <Input heading="City" holder="New York" />
      </div>
      <Input heading="Country" holder="United States" />
    </div>
  );
}
