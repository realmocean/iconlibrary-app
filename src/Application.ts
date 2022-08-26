import { ToolbarEx } from '@tuval/components/navigations';
import { ModuleLoader } from '@tuval/core';
import { TApplication } from '@tuval/forms';
import { MainForm } from './MainForm';

const manifest = require('./manifest');
declare var tuval$core;

function App(manifest: any) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    }
}

@App(manifest)
export class IconLibrary extends TApplication {
    private m_Toolbar: ToolbarEx;
    private m_tbiLabel: any;
    public InitComponents() {

        debugger;
        this.Icon = 'data:image/svg+xml;base64,PHN2ZyBpZD0iYmFjMjg2OTAtMjRiYS00ZDlkLTkyYjAtYmFkOWNjOGRiZDkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImExN2FhMzU0LWU1NjctNDM1Ni1hNzE4LTdlNGUyMTk4OTk4ZiIgeDE9IjkiIHkxPSItNzIwNS42NiIgeDI9IjkiIHkyPSItNzIxOS40NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAtMSwgMCwgLTcyMDYuNTUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjEzIiBzdG9wLWNvbG9yPSIjNzczYWRjIiAvPjxzdG9wIG9mZnNldD0iMC4yMyIgc3RvcC1jb2xvcj0iIzgyNDllMiIgLz48c3RvcCBvZmZzZXQ9IjAuNDMiIHN0b3AtY29sb3I9IiM5NjY0ZWMiIC8+PHN0b3Agb2Zmc2V0PSIwLjYiIHN0b3AtY29sb3I9IiNhMjc0ZjIiIC8+PHN0b3Agb2Zmc2V0PSIwLjc0IiBzdG9wLWNvbG9yPSIjYTY3YWY0IiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5JY29uLW1hbmFnZS0zMjY8L3RpdGxlPjxnPjxwYXRoIGQ9Ik0xNC40NSw4LjhIMy42OHY0Ljg1aDBjMCwxLjI2LDIuNDEsMi4yOSw1LjQ0LDIuMjlzNS40NC0xLDUuNDQtMi4yOWgwWiIgZmlsbD0iIzc3M2FkYyIgLz48cGF0aCBkPSJNOC4zOSwyLjE2bC04LDQuMDlhLjcxLjcxLDAsMCwwLS4yNS45NC42Mi42MiwwLDAsMCwuMjUuMjhsOCwzLjQ4YS45My45MywwLDAsMCwuNzMsMGw4LjQ4LTMuNWEuNzIuNzIsMCwwLDAsLjI4LS45NC42My42MywwLDAsMC0uMjgtLjNMOS4xNCwyLjE0QS44Ni44NiwwLDAsMCw4LjM5LDIuMTZaIiBmaWxsPSJ1cmwoI2ExN2FhMzU0LWU1NjctNDM1Ni1hNzE4LTdlNGUyMTk4OTk4ZikiIC8+PHBhdGggZD0iTTE1Ljg0LDEwLjJoMGExLjI2LDEuMjYsMCwwLDAtLjIzLS41Miw1LjE5LDUuMTksMCwwLDAtMi41Mi0yLjIzTDkuNjEsNiw4LjUsNi43OSwxMiw4LjI4YTUuMDUsNS4wNSwwLDAsMSwyLjcyLDIuNjZBNy44OCw3Ljg4LDAsMCwxLDE1LDEyLjYybS4xNiwwLC40Mi0uODMuNTMuNjhoLjFhNSw1LDAsMCwwLS4zOC0yLjI3WiIgZmlsbD0iIzUwZTZmZiIgLz48ZWxsaXBzZSBjeD0iOC45NCIgY3k9IjYuNDYiIHJ4PSIxLjM0IiByeT0iMC42OCIgZmlsbD0iIzU1MmY5OSIgLz48L2c+PC9zdmc+';
        const fileExprorer = new MainForm();


        //fileExprorer.Controls.Add(button);
        this.SetMainForm(fileExprorer);
        setTimeout(()=> this.Start(), 100);
    }
}