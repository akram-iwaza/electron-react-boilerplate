import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

interface AccordionComponentProps {
  label: string;
  children: React.ReactNode;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  label,
  children,
}) => (
  <Accordion type="single" collapsible className="w-full text-whiteColor">
    <AccordionItem value="item-1" className="w-full  py-4">
      <AccordionTrigger className="text-whiteColor font-bold text-base">
        {label}
      </AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default AccordionComponent;
