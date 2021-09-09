import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const Energy_widgetWidget: React.FunctionComponent<IWidgetProps> = (props) => {
    let [value,setValue] = React.useState(100);
    React.useEffect(()=>{
        props.uxpContext.executeAction('EnergyMeter','GetValue',{},{json:true}).then(data => setValue(data.value));
    },[])
    return (
        <WidgetWrapper className='energy-widget'>
            <div>
                {`Energy Consumption: ${value}`}
            </div>
        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "energy_widget",
    widget: Energy_widgetWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "energy_widget",
    label: "Energy_widget",
    // click: () => alert("Hello"),
    component: Energy_widgetWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"energy_widget",
    component: Energy_widgetWidget
});
*/