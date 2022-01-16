import type React from 'react';

import JSONPretty from 'react-json-pretty';

import { CopyButton } from '@components/menu/buttons/CopyButton';
import { Tab } from '@headlessui/react';
import type { Protobuf } from '@meshtastic/meshtasticjs';

export interface DebugPanelProps {
  channel: Protobuf.Channel;
}

export const DebugPanel = ({ channel }: DebugPanelProps): JSX.Element => {
  return (
    <Tab.Panel className="relative">
      <div className="fixed right-0 m-2">
        <CopyButton data={JSON.stringify(channel)} />
      </div>
      <JSONPretty className="max-w-sm" data={channel} />
    </Tab.Panel>
  );
};
