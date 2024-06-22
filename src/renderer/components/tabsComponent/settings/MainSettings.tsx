import { FC } from 'react';
import AccordionComponent from '../../custom/AccordionComponent';
import { Input } from '../../ui/input';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { updateSettingsSchema } from '../../schema/Settings';
import HeaderSettings from './HeaderSettings';
import { handleKeyDown } from '../../../lib/utils';

const MainSettings: FC<IPropsMainSettings> = () => {
  const formik = useFormik<Partial<ICreateOrUpdateSettingsResponse>>({
    initialValues: {
      blockNativeKey: undefined,
      delay: undefined,
      discordWebhook: undefined,
      etherscanKey: undefined,
      licenceKey: undefined,
      mempool: undefined,
      nodeKey: undefined,
    },
    enableReinitialize: true,
    validationSchema: toFormikValidationSchema(updateSettingsSchema),
    onSubmit: (values) => {
      console.log('Form Submitted', values);
    },
  });

  const { errors, setFieldValue, values, handleSubmit } = formik;

  const handleInputChange = (field: string, value: string) => {
    if (field === 'delay' && !/^\d*$/.test(value)) return;
    setFieldValue(
      field,
      value === '' ? undefined : field === 'delay' ? Number(value) : value,
    );
  };

  const renderInput = (
    label: string,
    field: keyof ICreateOrUpdateSettingsResponse,
    placeholder: string,
    disabled = false,
    maxLength?: number,
  ) => (
    <AccordionComponent label={label}>
      <Input
        placeholder={placeholder}
        value={values[field] ?? ''}
        onChange={(e) => handleInputChange(field, e.target.value.trimStart())}
        onKeyDown={field === 'delay' ? handleKeyDown : undefined}
        className="w-full border border-border mt-4 rounded-md placeholder:text-nickle text-white text-[0.9375rem] font-semibold placeholder:font-normal"
        error={errors[field]}
        disabled={disabled}
        maxLength={maxLength}
      />
    </AccordionComponent>
  );

  return (
    <div className="w-full flex flex-col items-start overflow-y-auto max-h-screen pr-3 pb-10 pl-4">
      <HeaderSettings />
      <form onSubmit={handleSubmit} className="w-full">
        {renderInput(
          'Discord Webhook',
          'discordWebhook',
          'Enter Discord Webhook',
        )}
        {renderInput(
          'Etherscan Api Key',
          'etherscanKey',
          'Enter Etherscan Api Key',
        )}
        {renderInput('Node Api Key', 'nodeKey', 'Enter Node Api Key')}
        {renderInput(
          'Blocknative Api Key',
          'blockNativeKey',
          'Enter Blocknative Api Key',
        )}
        {renderInput('Mempool Wss', 'mempool', 'Enter Mempool Wss')}
        {renderInput('Licence Key', 'licenceKey', 'Licence Key', true)}
        {renderInput(
          'Ethereum Delay',
          'delay',
          'Enter Ethereum Delay',
          false,
          5,
        )}
        {/* <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default MainSettings;
