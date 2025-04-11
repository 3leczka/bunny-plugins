import { ReactNative } from "@vendetta/metro/common";
import { Forms } from "@vendetta/ui/components";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";

const { FormIcon, FormSwitchRow } = Forms;

storage.nopk ??= false;
storage.ignoreOwnDeleted ??= false;

export default () => {
  useProxy(storage);

  return (
    <ReactNative.ScrollView>
      <FormSwitchRow
        label="Ignore YourSelf"
        leading={<FormIcon source={getAssetIDByName("ic_block")} />}
        onValueChange={(v) => void (storage.nopk = v)}
        value={storage.nopk}
      />
      <FormSwitchRow
        label="Ignore YourSelf:"
        leading={<FormIcon source={getAssetIDByName("ic_message_delete")} />}
        onValueChange={(v) => void (storage.ignoreOwnDeleted = v)}
        value={storage.ignoreOwnDeleted}
      />
    </ReactNative.ScrollView>
  );
};
