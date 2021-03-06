/*
**  BindingJS -- View Data Binding for JavaScript <http://bindingjs.org>
**  Copyright (c) 2014 Johannes Rummel
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License (MPL), version 2.0. If a copy of the MPL was not distributed
**  with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/* global JSON */

$api.plugin("text", () => {
    return {     
        getPaths: (element, path) => {
            return [path]
        },
        
        getValue: (element) => {
            return element.text()
        },
        
        set: (element, path, value) => {
            if (typeof value === "object") {
                try {
                    value = JSON.stringify(value)
                } catch (e) {
                    value = "{circular object}"
                }
            }
            element.text(value)
        },
        
        type: () => {
            return "view"
        }
    }
})
