import { int } from '@tuval/core';
import { bindState, cLeading, CornerRadiusTypes, cTop, ForEach, HStack, Icon, Text, VStack, Color } from '@tuval/forms';


export function CategoryListView(appsCategoryModel: any) {
    const [selectedIndex, setSelectedIndex] = bindState(-1);
    return ({ OnCategorySelected }) => {
        return (
            VStack({ alignment: cTop })(
                ...ForEach(appsCategoryModel)((catItem: any, index: int) =>
                    HStack({ alignment: cLeading, spacing: 12 })(
                        Icon(catItem.icon).size(17).foregroundColor(selectedIndex === index ? 'white' : 'rgb(0, 108, 244)'),
                        Text(catItem.name).fontSize('13px').fontWeight('500')
                    )
                        .width('85%')
                        .cornerRadius(CornerRadiusTypes.Rounded)
                        .height()
                        .padding(6)
                        .paddingLeft('12px')
                        .foregroundColor(selectedIndex === index ? 'white' : '')
                        .backgroundColor(selectedIndex === index ? 'rgb(63, 154, 251)' : '')
                        //.backgroundColor({ hover: Color('#0070DA').lighten().lighten() })
                        //.foregroundColor({ hover: 'white' })
                        .cursor('pointer')
                        .onClick(() => {  setSelectedIndex(index); /*OnCategorySelected(catItem.name) */ })
                )

            )
                //.initial({ width: col ? '210px' : '1px' }).animate({ width: col ? '210px' : '0px' })
               // .width()


        )
    }
}