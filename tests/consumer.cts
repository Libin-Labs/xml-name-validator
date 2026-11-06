import * as api from '@lp-labs/xml-name-validator';
import { isXmlName } from '@lp-labs/xml-name-validator';
console.log(isXmlName('item_2'));
// @ts-expect-error invalid argument must be rejected by declarations
api.isXmlName(2);
