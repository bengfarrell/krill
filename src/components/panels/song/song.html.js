import { html, svg } from 'lit';
import { ChordConstants, Note, Chord } from '../../../musictheory/index.js';

// copy by Yana Marudova https://thenounproject.com/browse/icons/term/copy/ Noun Project
const copyIcon = svg`<svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="m439.6 212.8h-22.402v-22.402c0-8.9102-3.5391-17.457-9.8398-23.758s-14.848-9.8398-23.758-9.8398h-123.2c-8.9102 0-17.457 3.5391-23.758 9.8398s-9.8398 14.848-9.8398 23.758v123.2c0 8.9102 3.5391 17.457 9.8398 23.758s14.848 9.8398 23.758 9.8398h22.398v22.398l0.003906 0.003906c0 8.9102 3.5391 17.457 9.8398 23.758s14.848 9.8398 23.758 9.8398h123.2c8.9102 0 17.457-3.5391 23.758-9.8398s9.8398-14.848 9.8398-23.758v-123.2c0-8.9102-3.5391-17.457-9.8398-23.758s-14.848-9.8398-23.758-9.8398zm-190.4 100.8v-123.2c0-6.1836 5.0156-11.199 11.199-11.199h123.2c2.9688 0 5.8164 1.1797 7.918 3.2812 2.1016 2.1016 3.2812 4.9492 3.2812 7.918v22.398l-78.402 0.003906c-8.9102 0-17.457 3.5391-23.758 9.8398s-9.8398 14.848-9.8398 23.758v78.402h-22.402c-6.1836 0-11.199-5.0156-11.199-11.199zm201.6 56c0 2.9688-1.1797 5.8164-3.2812 7.918-2.1016 2.1016-4.9492 3.2812-7.918 3.2812h-123.2c-6.1836 0-11.199-5.0156-11.199-11.199v-123.2c0-6.1836 5.0156-11.199 11.199-11.199h123.2c2.9688 0 5.8164 1.1797 7.918 3.2812 2.1016 2.1016 3.2812 4.9492 3.2812 7.918z"/>
  <path d="m411.6 296.8h-22.402v-22.402c0-6.1836-5.0117-11.199-11.199-11.199s-11.199 5.0156-11.199 11.199v22.398l-22.402 0.003906c-6.1836 0-11.199 5.0117-11.199 11.199s5.0156 11.199 11.199 11.199h22.398v22.398l0.003906 0.003906c0 6.1836 5.0117 11.199 11.199 11.199s11.199-5.0156 11.199-11.199v-22.402h22.402c6.1836 0 11.199-5.0117 11.199-11.199s-5.0156-11.199-11.199-11.199z"/>
</svg>`;

// drag by shashank singh from https://thenounproject.com/browse/icons/term/drag/ Noun Project
const dragHandleIcon = svg`<svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="m279.78 85.039c0 2.5703-0.16406 5.0859-0.49219 7.6016 0.27344-1.9141 0.54688-3.8828 0.76563-5.7969-0.71094 4.9219-1.9688 9.625-3.8281 14.219 0.71094-1.75 1.4766-3.5 2.1875-5.25-1.9688 4.6484-4.5391 9.0234-7.6016 13.07 1.1484-1.4766 2.2969-2.9531 3.4453-4.4297-2.9531 3.7734-6.3438 7.1641-10.117 10.117 1.4766-1.1484 2.9531-2.2969 4.4297-3.4453-4.0469 3.0625-8.3672 5.6328-13.07 7.6016 1.75-0.71094 3.5-1.4766 5.25-2.1875-4.5938 1.8594-9.2969 3.1172-14.219 3.8281 1.9141-0.27344 3.8828-0.54688 5.7969-0.76563-5.0859 0.65625-10.117 0.65625-15.203 0 1.9141 0.27344 3.8828 0.54688 5.7969 0.76563-4.9219-0.71094-9.625-1.9688-14.219-3.8281 1.75 0.71094 3.5 1.4766 5.25 2.1875-4.6484-1.9688-9.0234-4.5391-13.07-7.6016 1.4766 1.1484 2.9531 2.2969 4.4297 3.4453-3.7734-2.9531-7.1641-6.3438-10.117-10.117 1.1484 1.4766 2.2969 2.9531 3.4453 4.4297-3.0625-4.0469-5.6328-8.3672-7.6016-13.07 0.71094 1.75 1.4766 3.5 2.1875 5.25-1.8594-4.5938-3.1172-9.2969-3.8281-14.219 0.27344 1.9141 0.54687 3.8828 0.76562 5.7969-0.65625-5.0859-0.65625-10.117 0-15.203-0.27344 1.9141-0.54687 3.8828-0.76562 5.7969 0.71094-4.9219 1.9688-9.625 3.8281-14.219-0.71094 1.75-1.4766 3.5-2.1875 5.25 1.9688-4.6484 4.5391-9.0234 7.6016-13.07-1.1484 1.4766-2.2969 2.9531-3.4453 4.4297 2.9531-3.7734 6.3438-7.1641 10.117-10.117-1.4766 1.1484-2.9531 2.2969-4.4297 3.4453 4.0469-3.0625 8.3672-5.6328 13.07-7.6016-1.75 0.71094-3.5 1.4766-5.25 2.1875 4.5938-1.8594 9.2969-3.1172 14.219-3.8281-1.9141 0.27344-3.8828 0.54687-5.7969 0.76562 5.0859-0.65625 10.117-0.65625 15.203 0-1.9141-0.27344-3.8828-0.54687-5.7969-0.76562 4.9219 0.71094 9.625 1.9688 14.219 3.8281-1.75-0.71094-3.5-1.4766-5.25-2.1875 4.6484 1.9688 9.0234 4.5391 13.07 7.6016-1.4766-1.1484-2.9531-2.2969-4.4297-3.4453 3.7734 2.9531 7.1641 6.3438 10.117 10.117-1.1484-1.4766-2.2969-2.9531-3.4453-4.4297 3.0625 4.0469 5.6328 8.3672 7.6016 13.07-0.71094-1.75-1.4766-3.5-2.1875-5.25 1.8594 4.5938 3.1172 9.2969 3.8281 14.219-0.27344-1.9141-0.54688-3.8828-0.76563-5.7969 0.27344 2.5156 0.4375 5.0312 0.49219 7.6016 0.054688 5.6328 2.4062 11.484 6.3984 15.477 3.7734 3.7734 10.008 6.6719 15.477 6.3984 11.812-0.54687 21.93-9.625 21.875-21.875-0.10938-15.422-4.5938-31.555-13.617-44.188-5.6328-7.875-11.594-13.891-19.25-19.688-6.1797-4.7031-13.07-7.9297-20.289-10.609-29.148-10.773-65.461-1.0938-85.148 23.023-6.125 7.5469-10.5 14.82-14.109 23.844-2.9531 7.3828-4.3203 15.148-4.9219 23.023-1.2578 15.477 3.0078 31.992 11.047 45.172 7.7656 12.797 19.578 24.172 33.359 30.297 4.1562 1.8594 8.3672 3.7188 12.797 4.9219 4.7578 1.3672 9.6797 1.9688 14.547 2.5156 7.9844 0.92969 16.078 0.10938 23.953-1.4766 16.023-3.2266 32.102-12.742 42.438-25.43 6.6172-8.0938 11.266-16.078 14.93-25.867 3.0078-8.0938 4.2656-17.008 4.3203-25.594 0.054687-11.43-10.117-22.422-21.875-21.875-11.977 0.60156-21.875 9.6797-21.93 21.93z"/>
  <path d="m279.78 280c0 2.5703-0.16406 5.0859-0.49219 7.6016 0.27344-1.9141 0.54688-3.8828 0.76563-5.7969-0.71094 4.9219-1.9688 9.625-3.8281 14.219 0.71094-1.75 1.4766-3.5 2.1875-5.25-1.9688 4.6484-4.5391 9.0234-7.6016 13.07 1.1484-1.4766 2.2969-2.9531 3.4453-4.4297-2.9531 3.7734-6.3438 7.1641-10.117 10.117 1.4766-1.1484 2.9531-2.2969 4.4297-3.4453-4.0469 3.0625-8.3672 5.6328-13.07 7.6016 1.75-0.71094 3.5-1.4766 5.25-2.1875-4.5938 1.8594-9.2969 3.1172-14.219 3.8281 1.9141-0.27344 3.8828-0.54688 5.7969-0.76562-5.0859 0.65625-10.117 0.65625-15.203 0 1.9141 0.27344 3.8828 0.54688 5.7969 0.76562-4.9219-0.71094-9.625-1.9688-14.219-3.8281 1.75 0.71094 3.5 1.4766 5.25 2.1875-4.6484-1.9688-9.0234-4.5391-13.07-7.6016 1.4766 1.1484 2.9531 2.2969 4.4297 3.4453-3.7734-2.9531-7.1641-6.3438-10.117-10.117 1.1484 1.4766 2.2969 2.9531 3.4453 4.4297-3.0625-4.0469-5.6328-8.3672-7.6016-13.07 0.71094 1.75 1.4766 3.5 2.1875 5.25-1.8594-4.5938-3.1172-9.2969-3.8281-14.219 0.27344 1.9141 0.54687 3.8828 0.76562 5.7969-0.65625-5.0859-0.65625-10.117 0-15.203-0.27344 1.9141-0.54687 3.8828-0.76562 5.7969 0.71094-4.9219 1.9688-9.625 3.8281-14.219-0.71094 1.75-1.4766 3.5-2.1875 5.25 1.9688-4.6484 4.5391-9.0234 7.6016-13.07-1.1484 1.4766-2.2969 2.9531-3.4453 4.4297 2.9531-3.7734 6.3438-7.1641 10.117-10.117-1.4766 1.1484-2.9531 2.2969-4.4297 3.4453 4.0469-3.0625 8.3672-5.6328 13.07-7.6016-1.75 0.71094-3.5 1.4766-5.25 2.1875 4.5938-1.8594 9.2969-3.1172 14.219-3.8281-1.9141 0.27344-3.8828 0.54688-5.7969 0.76562 5.0859-0.65625 10.117-0.65625 15.203 0-1.9141-0.27344-3.8828-0.54688-5.7969-0.76562 4.9219 0.71094 9.625 1.9688 14.219 3.8281-1.75-0.71094-3.5-1.4766-5.25-2.1875 4.6484 1.9688 9.0234 4.5391 13.07 7.6016-1.4766-1.1484-2.9531-2.2969-4.4297-3.4453 3.7734 2.9531 7.1641 6.3438 10.117 10.117-1.1484-1.4766-2.2969-2.9531-3.4453-4.4297 3.0625 4.0469 5.6328 8.3672 7.6016 13.07-0.71094-1.75-1.4766-3.5-2.1875-5.25 1.8594 4.5938 3.1172 9.2969 3.8281 14.219-0.27344-1.9141-0.54688-3.8828-0.76563-5.7969 0.27344 2.5156 0.4375 5.0312 0.49219 7.6016 0.054688 5.6328 2.4062 11.484 6.3984 15.477 3.7734 3.7734 10.008 6.6719 15.477 6.3984 11.812-0.54688 21.93-9.625 21.875-21.875-0.10938-15.422-4.5938-31.555-13.617-44.188-5.6328-7.875-11.594-13.891-19.25-19.688-6.1797-4.7031-13.07-7.9297-20.289-10.609-29.148-10.773-65.461-1.0938-85.148 23.023-6.125 7.5469-10.5 14.82-14.109 23.844-2.9531 7.3828-4.3203 15.148-4.9219 23.023-1.2578 15.477 3.0078 31.992 11.047 45.172 7.7656 12.797 19.578 24.172 33.359 30.297 4.1562 1.8594 8.3672 3.7188 12.797 4.9219 4.7578 1.3672 9.6797 1.9688 14.547 2.5156 7.9844 0.92969 16.078 0.10938 23.953-1.4766 16.023-3.2266 32.102-12.742 42.438-25.43 6.6172-8.0938 11.266-16.078 14.93-25.867 3.0078-8.0938 4.2656-17.008 4.3203-25.594 0.054687-11.43-10.117-22.422-21.875-21.875-11.977 0.60156-21.875 9.6797-21.93 21.93z"/>
  <path d="m279.78 474.96c0 2.5703-0.16406 5.0859-0.49219 7.6016 0.27344-1.9141 0.54688-3.8828 0.76563-5.7969-0.71094 4.9219-1.9688 9.625-3.8281 14.219 0.71094-1.75 1.4766-3.5 2.1875-5.25-1.9688 4.6484-4.5391 9.0234-7.6016 13.07 1.1484-1.4766 2.2969-2.9531 3.4453-4.4297-2.9531 3.7734-6.3438 7.1641-10.117 10.117 1.4766-1.1484 2.9531-2.2969 4.4297-3.4453-4.0469 3.0625-8.3672 5.6328-13.07 7.6016 1.75-0.71094 3.5-1.4766 5.25-2.1875-4.5938 1.8594-9.2969 3.1172-14.219 3.8281 1.9141-0.27344 3.8828-0.54687 5.7969-0.76562-5.0859 0.65625-10.117 0.65625-15.203 0 1.9141 0.27344 3.8828 0.54687 5.7969 0.76562-4.9219-0.71094-9.625-1.9688-14.219-3.8281 1.75 0.71094 3.5 1.4766 5.25 2.1875-4.6484-1.9688-9.0234-4.5391-13.07-7.6016 1.4766 1.1484 2.9531 2.2969 4.4297 3.4453-3.7734-2.9531-7.1641-6.3438-10.117-10.117 1.1484 1.4766 2.2969 2.9531 3.4453 4.4297-3.0625-4.0469-5.6328-8.3672-7.6016-13.07 0.71094 1.75 1.4766 3.5 2.1875 5.25-1.8594-4.5938-3.1172-9.2969-3.8281-14.219 0.27344 1.9141 0.54687 3.8828 0.76562 5.7969-0.65625-5.0859-0.65625-10.117 0-15.203-0.27344 1.9141-0.54687 3.8828-0.76562 5.7969 0.71094-4.9219 1.9688-9.625 3.8281-14.219-0.71094 1.75-1.4766 3.5-2.1875 5.25 1.9688-4.6484 4.5391-9.0234 7.6016-13.07-1.1484 1.4766-2.2969 2.9531-3.4453 4.4297 2.9531-3.7734 6.3438-7.1641 10.117-10.117-1.4766 1.1484-2.9531 2.2969-4.4297 3.4453 4.0469-3.0625 8.3672-5.6328 13.07-7.6016-1.75 0.71094-3.5 1.4766-5.25 2.1875 4.5938-1.8594 9.2969-3.1172 14.219-3.8281-1.9141 0.27344-3.8828 0.54688-5.7969 0.76563 5.0859-0.65625 10.117-0.65625 15.203 0-1.9141-0.27344-3.8828-0.54688-5.7969-0.76563 4.9219 0.71094 9.625 1.9688 14.219 3.8281-1.75-0.71094-3.5-1.4766-5.25-2.1875 4.6484 1.9688 9.0234 4.5391 13.07 7.6016-1.4766-1.1484-2.9531-2.2969-4.4297-3.4453 3.7734 2.9531 7.1641 6.3438 10.117 10.117-1.1484-1.4766-2.2969-2.9531-3.4453-4.4297 3.0625 4.0469 5.6328 8.3672 7.6016 13.07-0.71094-1.75-1.4766-3.5-2.1875-5.25 1.8594 4.5938 3.1172 9.2969 3.8281 14.219-0.27344-1.9141-0.54688-3.8828-0.76563-5.7969 0.27344 2.5156 0.4375 5.0312 0.49219 7.6016 0.054688 5.6328 2.4062 11.484 6.3984 15.477 3.7734 3.7734 10.008 6.6719 15.477 6.3984 11.812-0.54688 21.93-9.625 21.875-21.875-0.10938-15.422-4.5938-31.555-13.617-44.188-5.6328-7.875-11.594-13.891-19.25-19.688-6.1797-4.7031-13.07-7.9297-20.289-10.609-29.148-10.773-65.461-1.0938-85.148 23.023-6.125 7.5469-10.5 14.82-14.109 23.844-2.9531 7.3828-4.3203 15.148-4.9219 23.023-1.2578 15.477 3.0078 31.992 11.047 45.172 7.7656 12.797 19.578 24.172 33.359 30.297 4.1562 1.8594 8.3672 3.7188 12.797 4.9219 4.7578 1.3672 9.6797 1.9688 14.547 2.5156 7.9844 0.92969 16.078 0.10937 23.953-1.4766 16.023-3.2266 32.102-12.742 42.438-25.43 6.6172-8.0938 11.266-16.078 14.93-25.867 3.0078-8.0938 4.2656-17.008 4.3203-25.594 0.054687-11.43-10.117-22.422-21.875-21.875-11.977 0.60156-21.875 9.6797-21.93 21.93z"/>
  <path d="m490.33 85.039c0 2.5703-0.16406 5.0859-0.49219 7.6016 0.27344-1.9141 0.54687-3.8828 0.76562-5.7969-0.71094 4.9219-1.9688 9.625-3.8281 14.219 0.71094-1.75 1.4766-3.5 2.1875-5.25-1.9688 4.6484-4.5391 9.0234-7.6016 13.07 1.1484-1.4766 2.2969-2.9531 3.4453-4.4297-2.9531 3.7734-6.3438 7.1641-10.117 10.117 1.4766-1.1484 2.9531-2.2969 4.4297-3.4453-4.0469 3.0625-8.3672 5.6328-13.07 7.6016 1.75-0.71094 3.5-1.4766 5.25-2.1875-4.5938 1.8594-9.2969 3.1172-14.219 3.8281 1.9141-0.27344 3.8828-0.54688 5.7969-0.76563-5.0859 0.65625-10.117 0.65625-15.203 0 1.9141 0.27344 3.8828 0.54688 5.7969 0.76563-4.9219-0.71094-9.625-1.9688-14.219-3.8281 1.75 0.71094 3.5 1.4766 5.25 2.1875-4.6484-1.9688-9.0234-4.5391-13.07-7.6016 1.4766 1.1484 2.9531 2.2969 4.4297 3.4453-3.7734-2.9531-7.1641-6.3438-10.117-10.117 1.1484 1.4766 2.2969 2.9531 3.4453 4.4297-3.0625-4.0469-5.6328-8.3672-7.6016-13.07 0.71094 1.75 1.4766 3.5 2.1875 5.25-1.8594-4.5938-3.1172-9.2969-3.8281-14.219 0.27344 1.9141 0.54688 3.8828 0.76563 5.7969-0.65625-5.0859-0.65625-10.117 0-15.203-0.27344 1.9141-0.54688 3.8828-0.76563 5.7969 0.71094-4.9219 1.9688-9.625 3.8281-14.219-0.71094 1.75-1.4766 3.5-2.1875 5.25 1.9688-4.6484 4.5391-9.0234 7.6016-13.07-1.1484 1.4766-2.2969 2.9531-3.4453 4.4297 2.9531-3.7734 6.3438-7.1641 10.117-10.117-1.4766 1.1484-2.9531 2.2969-4.4297 3.4453 4.0469-3.0625 8.3672-5.6328 13.07-7.6016-1.75 0.71094-3.5 1.4766-5.25 2.1875 4.5938-1.8594 9.2969-3.1172 14.219-3.8281-1.9141 0.27344-3.8828 0.54687-5.7969 0.76562 5.0859-0.65625 10.117-0.65625 15.203 0-1.9141-0.27344-3.8828-0.54687-5.7969-0.76562 4.9219 0.71094 9.625 1.9688 14.219 3.8281-1.75-0.71094-3.5-1.4766-5.25-2.1875 4.6484 1.9688 9.0234 4.5391 13.07 7.6016-1.4766-1.1484-2.9531-2.2969-4.4297-3.4453 3.7734 2.9531 7.1641 6.3438 10.117 10.117-1.1484-1.4766-2.2969-2.9531-3.4453-4.4297 3.0625 4.0469 5.6328 8.3672 7.6016 13.07-0.71094-1.75-1.4766-3.5-2.1875-5.25 1.8594 4.5938 3.1172 9.2969 3.8281 14.219-0.27344-1.9141-0.54687-3.8828-0.76562-5.7969 0.27344 2.5156 0.4375 5.0312 0.49219 7.6016 0.054687 5.6328 2.4062 11.484 6.3984 15.477 3.7734 3.7734 10.008 6.6719 15.477 6.3984 11.812-0.54687 21.93-9.625 21.875-21.875-0.10938-15.422-4.5938-31.555-13.617-44.188-5.6328-7.875-11.594-13.891-19.25-19.688-6.1797-4.7031-13.07-7.9297-20.289-10.609-29.148-10.773-65.461-1.0938-85.148 23.023-6.125 7.5469-10.5 14.82-14.109 23.844-2.9531 7.3828-4.3203 15.148-4.9219 23.023-1.2578 15.477 3.0078 31.992 11.047 45.172 7.7656 12.797 19.578 24.172 33.359 30.297 4.1562 1.8594 8.3672 3.7188 12.797 4.9219 4.7578 1.3672 9.6797 1.9688 14.547 2.5156 7.9844 0.92969 16.078 0.10938 23.953-1.4766 16.023-3.2266 32.102-12.742 42.438-25.43 6.6172-8.0938 11.266-16.078 14.93-25.867 3.0078-8.0938 4.2656-17.008 4.3203-25.594 0.054688-11.43-10.117-22.422-21.875-21.875-11.977 0.60156-21.875 9.6797-21.93 21.93z"/>
  <path d="m490.33 280c0 2.5703-0.16406 5.0859-0.49219 7.6016 0.27344-1.9141 0.54687-3.8828 0.76562-5.7969-0.71094 4.9219-1.9688 9.625-3.8281 14.219 0.71094-1.75 1.4766-3.5 2.1875-5.25-1.9688 4.6484-4.5391 9.0234-7.6016 13.07 1.1484-1.4766 2.2969-2.9531 3.4453-4.4297-2.9531 3.7734-6.3438 7.1641-10.117 10.117 1.4766-1.1484 2.9531-2.2969 4.4297-3.4453-4.0469 3.0625-8.3672 5.6328-13.07 7.6016 1.75-0.71094 3.5-1.4766 5.25-2.1875-4.5938 1.8594-9.2969 3.1172-14.219 3.8281 1.9141-0.27344 3.8828-0.54688 5.7969-0.76562-5.0859 0.65625-10.117 0.65625-15.203 0 1.9141 0.27344 3.8828 0.54688 5.7969 0.76562-4.9219-0.71094-9.625-1.9688-14.219-3.8281 1.75 0.71094 3.5 1.4766 5.25 2.1875-4.6484-1.9688-9.0234-4.5391-13.07-7.6016 1.4766 1.1484 2.9531 2.2969 4.4297 3.4453-3.7734-2.9531-7.1641-6.3438-10.117-10.117 1.1484 1.4766 2.2969 2.9531 3.4453 4.4297-3.0625-4.0469-5.6328-8.3672-7.6016-13.07 0.71094 1.75 1.4766 3.5 2.1875 5.25-1.8594-4.5938-3.1172-9.2969-3.8281-14.219 0.27344 1.9141 0.54688 3.8828 0.76563 5.7969-0.65625-5.0859-0.65625-10.117 0-15.203-0.27344 1.9141-0.54688 3.8828-0.76563 5.7969 0.71094-4.9219 1.9688-9.625 3.8281-14.219-0.71094 1.75-1.4766 3.5-2.1875 5.25 1.9688-4.6484 4.5391-9.0234 7.6016-13.07-1.1484 1.4766-2.2969 2.9531-3.4453 4.4297 2.9531-3.7734 6.3438-7.1641 10.117-10.117-1.4766 1.1484-2.9531 2.2969-4.4297 3.4453 4.0469-3.0625 8.3672-5.6328 13.07-7.6016-1.75 0.71094-3.5 1.4766-5.25 2.1875 4.5938-1.8594 9.2969-3.1172 14.219-3.8281-1.9141 0.27344-3.8828 0.54688-5.7969 0.76562 5.0859-0.65625 10.117-0.65625 15.203 0-1.9141-0.27344-3.8828-0.54688-5.7969-0.76562 4.9219 0.71094 9.625 1.9688 14.219 3.8281-1.75-0.71094-3.5-1.4766-5.25-2.1875 4.6484 1.9688 9.0234 4.5391 13.07 7.6016-1.4766-1.1484-2.9531-2.2969-4.4297-3.4453 3.7734 2.9531 7.1641 6.3438 10.117 10.117-1.1484-1.4766-2.2969-2.9531-3.4453-4.4297 3.0625 4.0469 5.6328 8.3672 7.6016 13.07-0.71094-1.75-1.4766-3.5-2.1875-5.25 1.8594 4.5938 3.1172 9.2969 3.8281 14.219-0.27344-1.9141-0.54687-3.8828-0.76562-5.7969 0.27344 2.5156 0.4375 5.0312 0.49219 7.6016 0.054687 5.6328 2.4062 11.484 6.3984 15.477 3.7734 3.7734 10.008 6.6719 15.477 6.3984 11.812-0.54688 21.93-9.625 21.875-21.875-0.10938-15.422-4.5938-31.555-13.617-44.188-5.6328-7.875-11.594-13.891-19.25-19.688-6.1797-4.7031-13.07-7.9297-20.289-10.609-29.148-10.773-65.461-1.0938-85.148 23.023-6.125 7.5469-10.5 14.82-14.109 23.844-2.9531 7.3828-4.3203 15.148-4.9219 23.023-1.2578 15.477 3.0078 31.992 11.047 45.172 7.7656 12.797 19.578 24.172 33.359 30.297 4.1562 1.8594 8.3672 3.7188 12.797 4.9219 4.7578 1.3672 9.6797 1.9688 14.547 2.5156 7.9844 0.92969 16.078 0.10938 23.953-1.4766 16.023-3.2266 32.102-12.742 42.438-25.43 6.6172-8.0938 11.266-16.078 14.93-25.867 3.0078-8.0938 4.2656-17.008 4.3203-25.594 0.054688-11.43-10.117-22.422-21.875-21.875-11.977 0.60156-21.875 9.6797-21.93 21.93z"/>
  <path d="m490.33 474.96c0 2.5703-0.16406 5.0859-0.49219 7.6016 0.27344-1.9141 0.54687-3.8828 0.76562-5.7969-0.71094 4.9219-1.9688 9.625-3.8281 14.219 0.71094-1.75 1.4766-3.5 2.1875-5.25-1.9688 4.6484-4.5391 9.0234-7.6016 13.07 1.1484-1.4766 2.2969-2.9531 3.4453-4.4297-2.9531 3.7734-6.3438 7.1641-10.117 10.117 1.4766-1.1484 2.9531-2.2969 4.4297-3.4453-4.0469 3.0625-8.3672 5.6328-13.07 7.6016 1.75-0.71094 3.5-1.4766 5.25-2.1875-4.5938 1.8594-9.2969 3.1172-14.219 3.8281 1.9141-0.27344 3.8828-0.54687 5.7969-0.76562-5.0859 0.65625-10.117 0.65625-15.203 0 1.9141 0.27344 3.8828 0.54687 5.7969 0.76562-4.9219-0.71094-9.625-1.9688-14.219-3.8281 1.75 0.71094 3.5 1.4766 5.25 2.1875-4.6484-1.9688-9.0234-4.5391-13.07-7.6016 1.4766 1.1484 2.9531 2.2969 4.4297 3.4453-3.7734-2.9531-7.1641-6.3438-10.117-10.117 1.1484 1.4766 2.2969 2.9531 3.4453 4.4297-3.0625-4.0469-5.6328-8.3672-7.6016-13.07 0.71094 1.75 1.4766 3.5 2.1875 5.25-1.8594-4.5938-3.1172-9.2969-3.8281-14.219 0.27344 1.9141 0.54688 3.8828 0.76563 5.7969-0.65625-5.0859-0.65625-10.117 0-15.203-0.27344 1.9141-0.54688 3.8828-0.76563 5.7969 0.71094-4.9219 1.9688-9.625 3.8281-14.219-0.71094 1.75-1.4766 3.5-2.1875 5.25 1.9688-4.6484 4.5391-9.0234 7.6016-13.07-1.1484 1.4766-2.2969 2.9531-3.4453 4.4297 2.9531-3.7734 6.3438-7.1641 10.117-10.117-1.4766 1.1484-2.9531 2.2969-4.4297 3.4453 4.0469-3.0625 8.3672-5.6328 13.07-7.6016-1.75 0.71094-3.5 1.4766-5.25 2.1875 4.5938-1.8594 9.2969-3.1172 14.219-3.8281-1.9141 0.27344-3.8828 0.54688-5.7969 0.76563 5.0859-0.65625 10.117-0.65625 15.203 0-1.9141-0.27344-3.8828-0.54688-5.7969-0.76563 4.9219 0.71094 9.625 1.9688 14.219 3.8281-1.75-0.71094-3.5-1.4766-5.25-2.1875 4.6484 1.9688 9.0234 4.5391 13.07 7.6016-1.4766-1.1484-2.9531-2.2969-4.4297-3.4453 3.7734 2.9531 7.1641 6.3438 10.117 10.117-1.1484-1.4766-2.2969-2.9531-3.4453-4.4297 3.0625 4.0469 5.6328 8.3672 7.6016 13.07-0.71094-1.75-1.4766-3.5-2.1875-5.25 1.8594 4.5938 3.1172 9.2969 3.8281 14.219-0.27344-1.9141-0.54687-3.8828-0.76562-5.7969 0.27344 2.5156 0.4375 5.0312 0.49219 7.6016 0.054687 5.6328 2.4062 11.484 6.3984 15.477 3.7734 3.7734 10.008 6.6719 15.477 6.3984 11.812-0.54688 21.93-9.625 21.875-21.875-0.10938-15.422-4.5938-31.555-13.617-44.188-5.6328-7.875-11.594-13.891-19.25-19.688-6.1797-4.7031-13.07-7.9297-20.289-10.609-29.148-10.773-65.461-1.0938-85.148 23.023-6.125 7.5469-10.5 14.82-14.109 23.844-2.9531 7.3828-4.3203 15.148-4.9219 23.023-1.2578 15.477 3.0078 31.992 11.047 45.172 7.7656 12.797 19.578 24.172 33.359 30.297 4.1562 1.8594 8.3672 3.7188 12.797 4.9219 4.7578 1.3672 9.6797 1.9688 14.547 2.5156 7.9844 0.92969 16.078 0.10937 23.953-1.4766 16.023-3.2266 32.102-12.742 42.438-25.43 6.6172-8.0938 11.266-16.078 14.93-25.867 3.0078-8.0938 4.2656-17.008 4.3203-25.594 0.054688-11.43-10.117-22.422-21.875-21.875-11.977 0.60156-21.875 9.6797-21.93 21.93z"/>
</svg>
`;

export const template = (scope) => {
    return html`
        <h1>Create a song</h1>
        <span>to practice in live playback mode</span>
        
        <input type="text" id="title-input" placeholder="My Song Name" value=${scope.songName}
               @change=${(event) => scope.songName = event.target.value } />
        <div id="segment-add-container">
            <select @change=${(event) => scope.chord = event.target.value }>
                ${Note.commonNotations.map(note =>
                        html`<option ?selected=${note === scope.chord}>${note}</option>`
                )}
            </select>
            <select @change=${(event) => scope.chordMod = event.target.value }>
                ${Object.values(ChordConstants).map(mod =>
                        html`<option ?selected=${mod === scope.chordMod}>${mod}</option>`
                )}
            </select>
            <span>for</span>
            <input @change=${(event) => scope.numBeats = parseInt(event.target.value) } 
                   type="number" value=${scope.numBeats} />
            <label>Beats</label>
        </div>
        <textarea @change=${(event) => scope.lyrics = event.target.value }
                placeholder="Add lyrics if you'd like them displayed with the chords"></textarea>
        <button class="add-bar" @click=${() => scope.addBar()}>+</button>
        
        <div id="song-line-container">
            ${scope.songs.findSong(scope.songID)?.bars.map((bar, index) => {
                const chord = new Chord(bar.chord).root;
                const chordMod = bar.chord.substring(chord.length, bar.chord.length);
                return html`<div class="song-bar" 
                                 data-index=${index}
                                 @dragend=${scope.handleDragEnd}
                                 @dragover=${scope.handleDragOver}
                                 @dragstart=${scope.handleDragStart}
                                 @pointerdown=${(e) => {
                                     if (e.target.classList.contains('drag-handle')) {
                                         e.currentTarget.setAttribute('draggable', true);
                                     }
                                 }}
                                 @pointerup=${(e) => {
                                     e.currentTarget.setAttribute('draggable', false);
                                 }}>
                    <span class="drag-handle">${dragHandleIcon}</span>
  
                    <select @change=${(event) => {
                            bar.chord = event.target.value + chordMod;
                            scope.songs.save();
                        }}>
                            ${Note.commonNotations.map(note =>
                                    html`<option ?selected=${note === chord}>${note}</option>`
                            )}
                    </select>
                    <select @change=${(event) => { 
                            bar.chord = chord + event.target.value;
                            scope.songs.save();
                        }}>
                            ${Object.values(ChordConstants).map(mod =>
                                    html`<option ?selected=${mod === chordMod}>${mod}</option>`
                            )}
                    </select>
                    <label class="beats-field">x</label><input class="beats-field" @change=${(event) => { 
                        bar.numBeats = parseInt(event.target.value);
                        scope.songs.save();
                        }} type="number" value=${bar.numBeats} />
                    <input class="lyrics-field" @change=${(event) => {
                        bar.lyrics = event.target.value;
                        scope.songs.save();
                    }} type="text" value=${bar.lyrics} />
                    <button class="copy tiny-circle" @click=${() => { scope.copyBar(index); }}>${copyIcon}</button>
                    <button class="delete" @click=${() => { scope.deleteBar(index); }}>x</button>
                </div>`;
            })}
        </div>`

}