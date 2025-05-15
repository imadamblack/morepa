import { Checkbox, Radio, Select } from './formAtoms';
import { restrictNumber } from '../../utils/formValidators';
import Link from 'next/link';
import { info } from '../../../info';

export default function StepRenderer({
  step,
  index,
  currentStep,
  inputError,
  register,
}) {
  if (index !== currentStep) return null;

  const commonText = (
    <div className="mb-8">
      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{ __html: step.title }} />
      {step.description && (
        <p className="ft-2 mt-4" dangerouslySetInnerHTML={{ __html: step.description }} />
      )}
    </div>
  );

  switch (step.type) {
    case 'text':
    case 'tel':
    case 'number':
      return (
        <div className="flex-grow">
          {commonText}
          <input
            {...register(step.name, step.inputOptions)}
            type={step.type}
            placeholder={step.placeholder}
            onKeyDown={step.type !== 'text' ? restrictNumber : undefined}
            className={inputError === index ? '!border-brand-2 mt-12' : 'mt-12'}
          />
        </div>
      );

    case 'textarea':
      return (
        <div className="flex-grow">
          {commonText}
          <textarea
            {...register(step.name, step.inputOptions)}
            placeholder={step.placeholder}
            rows={step.cols || 4}
            className={inputError === index ? '!border-brand-2 mt-12' : 'mt-12'}
          />
        </div>
      );

    case 'radio':
      return (
        <div className="flex flex-col">
          {commonText}
          <Radio
            name={step.name}
            inputOptions={step.inputOptions}
            placeholder={step.placeholder}
            options={step.options}
            optCols={step.cols}
            className={inputError === index ? '!border-brand-2' : undefined}
          />
        </div>
      );

    case 'checkbox':
      return (
        <div className="flex flex-col">
          {commonText}
          <Checkbox
            name={step.name}
            inputOptions={step.inputOptions}
            placeholder={step.placeholder}
            options={step.options}
            optCols={step.cols}
            className={inputError === index ? '!border-brand-2' : undefined}
          />
        </div>
      );

    case 'select':
      return (
        <div className="flex flex-col">
          {commonText}
          <Select
            name={step.name}
            inputOptions={step.inputOptions}
            placeholder={step.placeholder}
            options={step.options}
            className={inputError === index ? '!border-brand-2' : undefined}
          />
        </div>
      );

    case 'opt-in':
      return (
        <div className="flex flex-col gap-8 bg-brand-1/20 p-12 rounded-3xl">
          <div>
            <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{ __html: step.title }} />
            {step.description && (
              <p className="ft-2 mt-4" dangerouslySetInnerHTML={{ __html: step.description }} />
            )}
          </div>
          {step.fields.map((field, idx) => (
            <div key={field.name}>
              <input
                type={field.type}
                {...register(field.name, field.inputOptions)}
                placeholder={field.title}
                className={inputError === index ? '!border-brand-2' : ''}
              />
            </div>
          ))}
          <div className="mt-4">
            <p className="-ft-3 text-center text-brand-1">Tus datos no serán compartidos, al continuar aceptas nuestra&nbsp;
              <Link href={info.privacyNotice}>política de privacidad</Link>
            </p>
          </div>
        </div>
      );

    case 'checkpoint':
      return step.render();

    default:
      return null;
  }
}
