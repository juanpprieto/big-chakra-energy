import React, {useRef, useState} from 'react';
import {Box, Container, keyframes} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {
  ChakraProvider,
  Button,
  Checkbox,
  ControlBox,
  VisuallyHidden,
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  FormLabel,
  FormHelperText,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  Textarea,
  Accordion,
  AccordionItem,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Collapse,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  PopoverCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
  Tooltip,
  Divider,
  Grid,
  Image,
  Progress,
  Skeleton,
  Spinner,
  Tag,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Link,
  Icon,
  Flex,
  Popover,
} from '@chakra-ui/react';

const data = {
  Accordion: {
    name: 'Accordion',
    href: 'https://chakra-ui.com/accordion',
    description:
      'Accordions display a list of high-level options that can expand/collapse to reveal more information.',
  },
  Alert: {
    name: 'Alert',
    href: 'https://chakra-ui.com/alert',
    description:
      'Alerts are used to communicate a state that affects a system, feature or page.',
  },
  AlertDialog: {
    name: 'AlertDialog',
    href: 'https://chakra-ui.com/alertdialog',
    description:
      'AlertDialog component is used interrupt the user with a mandatory confirmation or action.',
  },
  AspectRatioBox: {
    name: 'AspectRatioBox',
    href: 'https://chakra-ui.com/aspectratiobox',
    description:
      "AspectRatioBox component is used to embed responsive videos and maps, etc. It uses a very common <a href='https://css-tricks.com/aspect-ratio-boxes/'><strong>padding hack</strong></a> to achieve this.",
  },
  Avatar: {
    name: 'Avatar',
    href: 'https://chakra-ui.com/avatar',
    description:
      'The Avatar component is used to represent user, and displays the profile picture, initials or fallback icon.',
  },
  Badge: {
    name: 'Badge',
    href: 'https://chakra-ui.com/badge',
    description:
      "Badges are used to highlight an item's status for quick recognition.",
  },
  Box: {
    name: 'Box',
    href: 'https://chakra-ui.com/box',
    description:
      'Box is the most abstract component on top of which all other Chakra UI components are built. By default, it renders a <code>div</code> element.',
  },
  Breadcrumb: {
    name: 'Breadcrumb',
    href: 'https://chakra-ui.com/breadcrumb',
    description:
      'Breadcrumbs, or a breadcrumb navigation, can help to enhance how users navigate to previous page levels of a website, especially if that website has many pages or products.',
  },
  Button: {
    name: 'Button',
    href: 'https://chakra-ui.com/button',
    description:
      'Button component is used to trigger an action or event, such as submitting a form, opening a\n<a href="https://chakra-ui.com/modal">Dialog</a>, canceling an action, or performing a delete operation.',
  },
  Checkbox: {
    name: 'Checkbox',
    href: 'https://chakra-ui.com/checkbox',
    description:
      "Checkbox component is used in forms when a user needs to select multiple values from several options.<br /><br /> Native HTML checkboxes are 100% accessible by default, so we used a <a href='https://dev.to/lkopacz/create-custom-keyboard-accessible-checkboxes-2036'>very common CSS technique</a> to style the checkboxes. <br /><br /> The Checkbox component composes <a href='/controlbox' >ControlBox</a>, a component we created to make it easy to style an element based on sibling inputs.</p>",
  },
  CircularProgress: {
    name: 'CircularProgress',
    href: 'https://chakra-ui.com/circularprogress',
    description:
      'Circular Progress is used to indicates the progress for determinate and indeterminate processes. <ul ><li>Determinate progress fill the circular track with color, as the indicator moves from 0 to 360 degrees.</li><li>Indeterminate progress grow and shrink the indicator while moving along the circular track.</li></ul>',
  },
  CloseButton: {
    name: 'CloseButton',
    href: 'https://chakra-ui.com/closebutton',
    description:
      "CloseButton is essentially a button with a close icon. It is used to handle the close functionality in feedback and overlay components like <a href='https://chakra-ui.com/alert'>Alerts</a>, <a href='https://chakra-ui.com/toast>Toasts</a>, <a href='https://chakra-ui.com/drawer' >Drawers</a> and <a href='https://chakra-ui.com/modal'>Modals</a>.",
  },
  Code: {
    name: 'Code',
    href: 'https://chakra-ui.com/code',
    description:
      "Code is a component used to display inline code. It is composed from the <a href='https://chakra-ui.com/box'>Box</a> component with a font family of <code>mono</code> for displaying code.",
  },
  Collapse: {
    name: 'Collapse',
    href: 'https://chakra-ui.com/collapse',
    description:
      "The Collapse component is used to create regions of content that can expand/collapse with a simple animation. It helps to hide content that's not immediately relevant to the user. <br /><br /><p>This component leverages <a href='https://github.com/Stanko/react-animate-height'>react-animate-height</a>, and composes the <a href='https://chakra-ui.com/box'>Box</a> component.</p>",
  },
  ControlBox: {
    name: 'ControlBox',
    href: 'https://chakra-ui.com/controlbox',
    description:
      "ControlBox provides style props to change it's styles based on a sibling <code>checkbox</code> or <code>radio</code> input. It relies on a <a href='https://dev.to/lkopacz/create-custom-keyboard-accessible-checkboxes-2036'>common CSS technique</a> for styling custom controls.",
  },
  Divider: {
    name: 'Divider',
    href: 'https://chakra-ui.com/divider',
    description:
      'Dividers are used to display a thin horizontal or vertical line.<br /><br />Divider composes <code>Box</code> so you can use all the style props and add responsive styles as well. It renders an <code>&lt;hr&gt;</code> tag by default.',
  },
  Drawer: {
    name: 'Drawer',
    href: 'https://chakra-ui.com/drawer',
    description:
      'The Drawer component is a panel that slides out from the edge of the screen. It can be useful when you need users to complete a task or view some details without leaving the current page.',
  },
  Editable: {
    name: 'Editable',
    href: 'https://chakra-ui.com/editable',
    description:
      'EditableText is used for inline renaming of some text. It appears as normal UI text but transforms into a text input field when the user clicks or focuses on it. <br /><br />The text input inherits all font styling from its parent, to make the edit and read view transition seamless.',
  },
  Flex: {
    name: 'Flex',
    href: 'https://chakra-ui.com/flex',
    description:
      "Flex is <a href='https://chakra-ui.com/box'>Box</a> with <code>display: flex</code> and comes with helpful style shorthand. It renders a <code>div</code> element.",
  },
  FormControl: {
    name: 'FormControl',
    href: 'https://chakra-ui.com/formcontrol',
    description:
      "FormControl provides context such as <code>isInvalid</code>, <code>isDisabled</code>, and <code>isRequired</code> to form elements. This context is used by the following components:<br /><br />It follows the <a href='https://www.w3.org/WAI/tutorials/forms/'>WAI specifications</a> for forms.",
  },
  Grid: {
    name: 'Grid',
    href: 'https://chakra-ui.com/grid',
    description:
      'A primitive useful for grid layouts. Grid is <code>Box</code> with <code>display: grid</code> and comes with helpful style shorthand. It renders a <code>div</code> element.',
  },
  Heading: {
    name: 'Heading',
    href: 'https://chakra-ui.com/heading',
    description:
      'Headings are used for rendering headlines. Heading composes <code>Box</code> so you can use all the style props and add responsive styles as well. It renders an <code>&lth2&gt</code> tag by default.',
  },
  Icon: {
    name: 'Icon',
    href: 'https://chakra-ui.com/icon',
    description:
      "Use the <code>&lt;Icon&gt;</code> component to easily render <code>&lt;svg&gt;</code> icons. Chakra UI provides basic interface icons, to add your icons, <a href='https://chakra-ui.com/icon#adding-custom-icons'>read the guide</a>.",
  },
  IconButton: {
    name: 'IconButton',
    href: 'https://chakra-ui.com/iconbutton',
    description:
      'IconButton composes the <code>Button</code> component, except that it renders only an icon.',
  },
  Image: {
    name: 'Image',
    href: 'https://chakra-ui.com/image',
    description:
      'The Image component is used to display images.<br /><br />Image composes <code>Box</code> so you can use all the style props and add responsive styles as well.',
  },
  Input: {
    name: 'Input',
    href: 'https://chakra-ui.com/input',
    description:
      "Input component is a component that is used to get user input in a text field. It is usually used together with a <a href='https://chakra-ui.com/formcontrol'</a> to provide an accessible label, validation messages, etc.",
  },
  Link: {
    name: 'Link',
    href: 'https://chakra-ui.com/link',
    description:
      'Links are accessible elements used primarily for navigation. This component is styled to resemble a hyperlink and semantically renders an <code>&lt;a&gt;</code>.',
  },
  List: {
    name: 'List',
    href: 'https://chakra-ui.com/list',
    description:
      'List is used to display list items, it renders a <Code>&ltul&gt</Code> by default.',
  },
  Menu: {
    name: 'Menu',
    href: 'https://chakra-ui.com/menu',
    description:
      'An accessible dropdown menu for the common dropdown menu button design pattern. Menu uses roving tabIndex for focus management.',
  },
  Modal: {
    name: 'Modal (Dialog)',
    href: 'https://chakra-ui.com/modal',
    description:
      'A dialog is a window overlaid on either the primary window or another dialog window. Contents behind a modal dialog are <strong>inert</strong> meaning that users cannot interact with content behind the dialog.',
  },
  NumberInput: {
    name: 'NumberInput',
    href: 'https://chakra-ui.com/numberinput',
    description:
      "The NumberInput component is similar to the <a href='https://chakra-ui.com/input'>Input</a>, but it has controls for incrementing or decrementing numeric values.<br /><br />It follows the <a href='https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton'>WAI-ARIA authoring practices</a> for the Spinbutton widget.",
  },
  Popover: {
    name: 'Popover',
    href: 'https://chakra-ui.com/popover',
    description:
      "Popover is a non-modal dialog that floats around a trigger. It's used to display contextual information to the user, and should be paired with a clickable trigger element.<br /><br />Popover is built on top of the <a href='https://popper.js.org/'>Popper.js</a> library, and composes the <code>Popper</code> component.",
  },
  Progress: {
    name: 'Progress',
    href: 'https://chakra-ui.com/progress',
    description:
      'Progress is used to display the progress status for a task that takes a long time or consists of several steps.',
  },
  PseudoBox: {
    name: 'PseudoBox',
    href: 'https://chakra-ui.com/pseudobox',
    description:
      "This component is inspired by <a href='https://tailwindcss.com/docs/pseudo-class-variants'>Tailwind CSS</a> Pseudo-Class variants and <a href='https://github.com/tkh44/glamorous-pseudo/'>Glamorous Pseudo</a>. <br /><br />PseudoBox composes <a href='https://chakra-ui.com/box'>Box</a> component and provides props to style common CSS pseudo selectors.",
  },
  Radio: {
    name: 'Radio',
    href: 'https://chakra-ui.com/radio',
    description:
      "Radios are used when only one choice may be selected in a series of options. <br /><br />Native HTML radios are 100% accessible by default, so we used a <a href='https://dev.to/lkopacz/create-custom-keyboard-accessible-radio-buttons-22eh' very common CSS technique</a> to style the radio.",
  },
  Select: {
    name: 'Select',
    href: 'https://chakra-ui.com/select',
    description:
      'Select component is a component that allows users pick a value from predefined options. Ideally, it should be used when there are more than 5 options, otherwise you might consider using a radio group instead.',
  },
  SimpleGrid: {
    name: 'SimpleGrid',
    href: 'https://chakra-ui.com/simplegrid',
    description:
      "If you're like me, I tend to always check the <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout'>MDN docs</a> for anything CSS grid.</p>",
  },
  Skeleton: {
    name: 'Skeleton',
    href: 'https://chakra-ui.com/skeleton',
    description:
      'Skeleton is used to display the loading state of some component.',
  },
  Slider: {
    name: 'Slider',
    href: 'https://chakra-ui.com/slider',
    description:
      'The Slider is used to allow users to make selections from a range of values.<br /><br />Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.',
  },
  Spinner: {
    name: 'Spinner',
    href: 'https://chakra-ui.com/spinner',
    description:
      'Spinners provide a visual cue that an action is processing awaiting a course of change or a result.',
  },
  Stack: {
    name: 'Stack',
    href: 'https://chakra-ui.com/stack',
    description:
      "Stack is a layout utility component that makes it easy to stack elements together and apply a space between them. It composes the <a href='https://chakra-ui.com/flex'>Flex</a> component.",
  },
  Stat: {
    name: 'Stat',
    href: 'https://chakra-ui.com/stat',
    description:
      'As the name implies, the Stat component is used to display some statistics.',
  },
  Switch: {
    name: 'Switch',
    href: 'https://chakra-ui.com/switch',
    description:
      "The Switch component is used as an alternative for the <a href='https://chakra-ui.com/checkbox'>Checkbox</a> component, switch between enabled or disabled states.<br /> <br />Switch must always be accompanied by a label, and follows the same keyboard workflow as a checkbox.",
  },
  Tabs: {
    name: 'Tabs',
    href: 'https://chakra-ui.com/tabs',
    description:
      'An accessible tabs component.<br /><br />The <code>Tab</code> and <code>TabPanel</code> elements are associated by their order in the tree. None of the components are empty wrappers, each is associated with a real DOM element in the document, giving you maximum control over styling and composition.',
  },
  Tag: {
    name: 'Tag',
    href: 'https://chakra-ui.com/tag',
    description:
      'Tag component is used for items that need to be labeled, categorized, or organized using keywords that describe them.',
  },
  Text: {
    name: 'Text',
    href: 'https://chakra-ui.com/text',
    description:
      'Text is the used to render text and paragraphs within an interface. It renders a <code>&lt;p&gt;</code> tag by default.',
  },
  Textarea: {
    name: 'Textarea',
    href: 'https://chakra-ui.com/textarea',
    description:
      'The Textarea component allows you to easily create multi-line text inputs.',
  },
  Toast: {
    name: 'Toast',
    href: 'https://chakra-ui.com/toast',
    description:
      'The toast is used to show alerts on top of an overlay. The toast will close itself when the close button is clicked, or after a timeout — the default is 5 seconds. The toast component is used to give feedback to users after an action has taken place.',
  },
  Tooltip: {
    name: 'Tooltip',
    href: 'https://chakra-ui.com/tooltip',
    description:
      'A tooltip is a brief, informative message that appears when a user interacts with an element. Tooltips are usually initiated in one of two ways: through a mouse-hover gesture or through a keyboard-hover gesture.',
  },
};

const ConsolidatedPopover = ({
  children,
  name,
  description,
  href,
  placement,
  w,
  minW,
  h,
  direction,
}: any) => {
  return (
    <Popover trigger="hover" placement={placement}>
      <PopoverTrigger>
        <Flex
          m="12"
          minW={minW}
          w={w}
          h={h}
          justify="center"
          align="center"
          flexDirection={direction}
        >
          {children}
        </Flex>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverArrow />
        <PopoverHeader>
          <Link
            href={href}
            target="blank"
            fontWeight="600"
            color="teal.500"
            isExternal
          >
            {name}
            <Icon name="external-link" mx="1" mb="1" />
          </Link>
        </PopoverHeader>
        <PopoverBody
          dangerouslySetInnerHTML={{__html: description}}
        ></PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const ButtonDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Button.name}
      href={data.Button.href}
      description={data.Button.description}
    >
      <Button>Button</Button>
    </ConsolidatedPopover>
  );
};

export const CheckboxDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Checkbox.name}
      href={data.Checkbox.href}
      description={data.Checkbox.description}
    >
      <Checkbox>Checkbox</Checkbox>
    </ConsolidatedPopover>
  );
};

export const ControlBoxDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.ControlBox.name}
      href={data.ControlBox.href}
      description={data.ControlBox.description}
    >
      <label>
        <VisuallyHidden as="input" type="checkbox" defaultChecked />

        <ControlBox
          borderWidth="1px"
          rounded="sm"
          _checked={{bg: 'green.500', color: 'white', borderColor: 'green.500'}}
          _focus={{borderColor: 'green.600', boxShadow: 'outline'}}
        >
          <Icon name="check" />
        </ControlBox>
      </label>
    </ConsolidatedPopover>
  );
};

export const EditableDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Editable.name}
      href={data.Editable.href}
      description={data.Editable.description}
    >
      <Editable defaultValue="Editable">
        <EditablePreview />
        <EditableInput />
      </Editable>
    </ConsolidatedPopover>
  );
};

export const FormControlDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.FormControl.name}
      href={data.FormControl.href}
      description={data.FormControl.description}
    >
      <FormControl>
        <FormLabel htmlFor="email">FormControl</FormLabel>
        <Input type="email" id="email" aria-describedby="email-helper-text" />
        <FormHelperText id="email-helper-text">Some other text.</FormHelperText>
      </FormControl>
    </ConsolidatedPopover>
  );
};

export const InputDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Input.name}
      href={data.Input.href}
      description={data.Input.description}
    >
      <Input placeholder="Input" />
    </ConsolidatedPopover>
  );
};

export const MenuDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Menu.name}
      href={data.Menu.href}
      description={data.Menu.description}
      placement="top"
    >
      <Menu>
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem as="a" href="#">
            Attend a Workshop
          </MenuItem>
        </MenuList>
      </Menu>
    </ConsolidatedPopover>
  );
};

export const NumberInputDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.NumberInput.name}
      href={data.NumberInput.href}
      description={data.NumberInput.description}
    >
      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </ConsolidatedPopover>
  );
};

export const RadioDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Radio.name}
      href={data.Radio.href}
      description={data.Radio.description}
    >
      <RadioGroup>
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
    </ConsolidatedPopover>
  );
};

export const SelectDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Select.name}
      href={data.Select.href}
      description={data.Select.description}
    >
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </ConsolidatedPopover>
  );
};

export const SliderDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Slider.name}
      href={data.Slider.href}
      description={data.Slider.description}
      minW="15em"
    >
      <Slider defaultValue={30}>
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb />
      </Slider>
    </ConsolidatedPopover>
  );
};

export const SwitchDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Switch.name}
      href={data.Switch.href}
      description={data.Switch.description}
    >
      <Flex justify="center" align="center">
        <FormLabel htmlFor="demo-switch">Switch</FormLabel>
        <Switch id="demo-switch" />
      </Flex>
    </ConsolidatedPopover>
  );
};

export const TextareaDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Textarea.name}
      href={data.Textarea.href}
      description={data.Textarea.description}
    >
      <Textarea placeholder="Textarea" />
    </ConsolidatedPopover>
  );
};

export const AccordionDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Accordion.name}
      href={data.Accordion.href}
      description={data.Accordion.description}
    >
      <Accordion>
        <AccordionItem></AccordionItem>
      </Accordion>
    </ConsolidatedPopover>
  );
};

export const AlertDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Alert.name}
      href={data.Alert.href}
      description={data.Alert.description}
      w="30em"
    >
      <AlertIcon />
      <AlertTitle mr={2}>Alert!</AlertTitle>
      <AlertDescription mr={6}>Something has happened.</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </ConsolidatedPopover>
  );
};

export const DrawerDemo = ({data}: {data: any}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef();

  return (
    <ConsolidatedPopover
      name={data.Drawer.name}
      href={data.Drawer.href}
      description={data.Drawer.description}
    >
      <Button onClick={onOpen}>Drawer</Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ConsolidatedPopover>
  );
};

export const AlertDialogDemo = ({data}: {data: any}) => {
  const [isOpen, setIsOpen] = useState();
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  return (
    <ConsolidatedPopover
      name={data.AlertDialog.name}
      href={data.AlertDialog.href}
      description={data.AlertDialog.description}
    >
      <Button onClick={() => setIsOpen(true)}>AlertDialog</Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Do This Thing
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure you want to do this thing? You can't undo this thing
            afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose} ml={3}>
              Do It
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ConsolidatedPopover>
  );
};

export const CloseButtonDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.CloseButton.name}
      href={data.CloseButton.href}
      description={data.CloseButton.description}
    >
      <CloseButton />
    </ConsolidatedPopover>
  );
};

export const CollapseDemo = ({data}: {data: any}) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <ConsolidatedPopover
      name={data.Collapse.name}
      href={data.Collapse.href}
      description={data.Collapse.description}
      w="40vw"
      direction="column"
    >
      <Button onClick={handleToggle}>Collapse</Button>
      <Collapse isOpen={show}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse>
    </ConsolidatedPopover>
  );
};

export const IconButtonDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.IconButton.name}
      href={data.IconButton.href}
      description={data.IconButton.description}
    >
      <IconButton aria-label="Search database" />
    </ConsolidatedPopover>
  );
};

export const LinkDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Link.name}
      href={data.Link.href}
      description={data.Link.description}
    >
      <Link>Link</Link>
    </ConsolidatedPopover>
  );
};

export const ModalDemo = ({data}: {data: any}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <ConsolidatedPopover
      name={data.Modal.name}
      href={data.Modal.href}
      description={data.Modal.description}
    >
      <Button onClick={onOpen}>Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
              officia tempor esse quis.
            </p>
            <p>
              Sunt ad dolore quis aute consequat. Magna exercitation
              reprehenderit magna aute tempor cupidatat consequat elit dolor
              adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
              Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
              eiusmod. Et mollit incididunt nisi consectetur esse laborum
              eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud
              ad veniam.
            </p>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ConsolidatedPopover>
  );
};

export const PopoverDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Popover.name}
      href={data.Popover.href}
      description={data.Popover.description}
    >
      <Popover placement="top">
        <PopoverTrigger>
          <Button>Popover</Button>
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Yo Dawg</PopoverHeader>
          <PopoverBody>I heard you like popovers.</PopoverBody>
        </PopoverContent>
      </Popover>
    </ConsolidatedPopover>
  );
};

export const TabsDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Tabs.name}
      href={data.Tabs.href}
      description={data.Tabs.description}
      w="30em"
    >
      <Tabs>
        <TabList>
          <Tab>Tab One</Tab>
          <Tab>Tab Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ConsolidatedPopover>
  );
};

export const ToastDemo = ({data}: {data: any}) => {
  const toast = useToast();
  return (
    <ConsolidatedPopover
      name={data.Toast.name}
      href={data.Toast.href}
      description={data.Toast.description}
    >
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Toast
      </Button>
    </ConsolidatedPopover>
  );
};

export const TooltipDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Tooltip.name}
      href={data.Tooltip.href}
      description={data.Tooltip.description}
    >
      <Tooltip label="This is a tooltip">Tooltip</Tooltip>
    </ConsolidatedPopover>
  );
};

export const AspectRatioBoxDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.AspectRatioBox.name}
      href={data.AspectRatioBox.href}
      description={data.AspectRatioBox.description}
    >
      <Flex
        h="300px"
        w="400px"
        bg="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <p color="gray.500">4 : 3</p>
      </Flex>
    </ConsolidatedPopover>
  );
};

export const BoxDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Box.name}
      href={data.Box.href}
      description={data.Box.description}
    >
      <div>Box</div>
    </ConsolidatedPopover>
  );
};

export const DividerDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Divider.name}
      href={data.Divider.href}
      description={data.Divider.description}
    >
      <Flex>
        <span>Divider</span>
        <Divider orientation="vertical" />
        <span>Divider</span>
      </Flex>
    </ConsolidatedPopover>
  );
};

export const FlexDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Flex.name}
      href={data.Flex.href}
      description={data.Flex.description}
    >
      <Flex align="center">
        <Flex bg="green.50" align="flex-end">
          <p>Flex</p>
        </Flex>
        <Flex bg="blue.50" align="center" justify="center">
          <p>Flex</p>
        </Flex>
        <div>
          <p color="white">Flex</p>
        </div>
      </Flex>
    </ConsolidatedPopover>
  );
};

export const GridDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Grid.name}
      href={data.Grid.href}
      description={data.Grid.description}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <div>Grid</div>
        <div>Grid</div>
        <div>Grid</div>
        <div>Grid</div>
      </Grid>
    </ConsolidatedPopover>
  );
};

export const PseudoBoxDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.PseudoBox.name}
      href={data.PseudoBox.href}
      description={data.PseudoBox.description}
    >
      <div
        color="blue.700"
        py={2}
        px={4}
        mx={8}
        borderWidth="1px"
        borderColor="blue.500"
        rounded="md"
        _hover={{bg: 'blue.500', color: ' white'}}
        _focus={{boxShadow: 'outline'}}
      >
        PseudoBox (Hover)
      </div>
    </ConsolidatedPopover>
  );
};

export const SimpleGridDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.SimpleGrid.name}
      href={data.SimpleGrid.href}
      description={data.SimpleGrid.description}
    >
      <Grid>
        <div>SimpleGrid</div>
        <div>SimpleGrid</div>
        <div>SimpleGrid</div>
        <div>SimpleGrid</div>
      </Grid>
    </ConsolidatedPopover>
  );
};

function Feature({title, desc, ...rest}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export const StackDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Stack.name}
      href={data.Stack.href}
      description={data.Stack.description}
    >
      <div>
        <Feature
          title="Stack"
          desc="The future can be even brighter but a goal without a plan is just a wish"
        />
        <Feature
          title="Stack"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
        />
      </div>
    </ConsolidatedPopover>
  );
};

export const CodeDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Code.name}
      href={data.Code.href}
      description={data.Code.description}
    >
      <code>Code Code Code Code</code>
    </ConsolidatedPopover>
  );
};

export const HeadingDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Heading.name}
      href={data.Heading.href}
      description={data.Heading.description}
    >
      <h2>Heading Heading</h2>
    </ConsolidatedPopover>
  );
};

export const ListDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.List.name}
      href={data.List.href}
      description={data.List.description}
    ></ConsolidatedPopover>
  );
};

export const StatDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Stat.name}
      href={data.Stat.href}
      description={data.Stat.description}
    ></ConsolidatedPopover>
  );
};

export const TextDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Text.name}
      href={data.Text.href}
      description={data.Text.description}
    ></ConsolidatedPopover>
  );
};

export const AvatarDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Avatar.name}
      href={data.Avatar.href}
      description={data.Avatar.description}
    ></ConsolidatedPopover>
  );
};

export const BadgeDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Badge.name}
      href={data.Badge.href}
      description={data.Badge.description}
    ></ConsolidatedPopover>
  );
};

export const BreadcrumbDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Breadcrumb.name}
      href={data.Breadcrumb.href}
      description={data.Breadcrumb.description}
    ></ConsolidatedPopover>
  );
};

export const CircularProgressDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.CircularProgress.name}
      href={data.CircularProgress.href}
      description={data.CircularProgress.description}
    ></ConsolidatedPopover>
  );
};

export const IconDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Icon.name}
      href={data.Icon.href}
      description={data.Icon.description}
    >
      {/* Default size is 1em => 16px */}
      <Icon name="phone" />

      {/* Use the `size` prop to change the icon size */}
      <Icon name="check-circle" />

      {/* Use the `color` prop to change the icon color */}
      <Icon name="warning" color="red.500" />
    </ConsolidatedPopover>
  );
};

export const ImageDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Image.name}
      href={data.Image.href}
      description={data.Image.description}
    >
      <div>
        <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
      </div>
    </ConsolidatedPopover>
  );
};

export const ProgressDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Progress.name}
      href={data.Progress.href}
      description={data.Progress.description}
    >
      <Progress h={3} w={48} hasStripe isAnimated />
    </ConsolidatedPopover>
  );
};

export const SkeletonDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Skeleton.name}
      href={data.Skeleton.href}
      description={data.Skeleton.description}
    >
      <div>
        <Skeleton w={48} height="20px" my="10px" />
        <Skeleton w={48} height="20px" my="10px" />
        <Skeleton w={48} height="20px" my="10px" />
      </div>
    </ConsolidatedPopover>
  );
};

export const SpinnerDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Spinner.name}
      href={data.Spinner.href}
      description={data.Spinner.description}
    >
      <Spinner />
    </ConsolidatedPopover>
  );
};

export const TagDemo = ({data}: {data: any}) => {
  return (
    <ConsolidatedPopover
      name={data.Tag.name}
      href={data.Tag.href}
      description={data.Tag.description}
    >
      <Tag></Tag>

      <Tag></Tag>
    </ConsolidatedPopover>
  );
};

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

function Framer() {
  return (
    <Container
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        as={motion.div}
        animation={animation}
        // not work: transition={{ ... }}
        padding="2"
        // @ts-ignore - "Does not exist" Type Error against Motion
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        width="12"
        height="12"
        display="flex"
      />
    </Container>
  );
}

export default function Chakra() {
  return (
    <div>
      <IconDemo data={data} />
      <CircularProgressDemo data={data} />
      <Framer />
      <TagDemo data={data} />
      <ImageDemo data={data} />
      <ProgressDemo data={data} />
      <ButtonDemo data={data} />
      <BoxDemo data={data} />
      <SpinnerDemo data={data} />
      <SkeletonDemo data={data} />
    </div>
  );
}
