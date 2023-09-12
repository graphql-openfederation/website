import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import * as Accordion from '@radix-ui/react-accordion';

const FAQ = ({
  items,
}: {
  items: {
    question: string;
    answer: string;
  }[];
}) => (
  <Accordion.Root className="flex flex-col divide-y-2" type="multiple">
    {items.map(({ question, answer }) => {
      return (
        <Accordion.Item className="group" key={question} value={question}>
          <Accordion.Header>
            <Accordion.Trigger className="py-4 flex items-center w-full justify-between md:text-lg font-semibold text-left hover:text-purple-700">
              {question}
              <MinusIcon className="h-6 w-6 group-radix-state-closed:hidden" />
              <PlusIcon className="h-6 w-6 group-radix-state-open:hidden" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-4 text-sm md:text-base">{answer}</Accordion.Content>
        </Accordion.Item>
      );
    })}
  </Accordion.Root>
);

export default FAQ;
