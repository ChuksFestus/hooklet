/** @license hooklet v0.0.1
 *
 * Copyright (c) Chuks Festus.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from "react";

export function useFormInput() {
  const [value, setValue] = useState();

  function handleChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}
