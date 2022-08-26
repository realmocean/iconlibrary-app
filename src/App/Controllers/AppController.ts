import {
    CornerRadiusTypes,
    cTopLeading,
    ForEach,
    HStack,
    Icon,
    IconLibrary,
    IconType,
    ScrollView,
    Text,
    UIController,
    UIScene,
    VStack,
    cVertical,
    PositionTypes,
    Color,
    Cache,
    UIButton,
    State
} from '@tuval/forms';
import { CategoryListView } from './CategoryListView';
import { TForm, cLeading } from '@tuval/forms';

const appsCategoryModel = [
    {
        name: 'Discover',
        icon: '\\e838'
    },
    {
        name: 'All',
        icon: '\\e5c3'
    },
    {
        name: "What's New",
        icon: '\\e02c'
    },
    {
        name: 'Communication',
        icon: '\\eb3f'
    },
    {
        name: 'Weather',
        icon: '\\d1d8'
    },
    {
        name: 'Object & Tools',
        icon: '\\e32a'
    },
    {
        name: 'Devices',
        icon: '\\eb9b'
    },
    {
        name: 'Gaming',
        icon: '\\f1b7'
    },
    {
        name: 'Connectivity',
        icon: '\\f1b7'
    },
    {
        name: 'Transportation',
        icon: '\\f1b7'
    },
    {
        name: 'Human',
        icon: '\\f1b7'
    },
    {
        name: 'Nature',
        icon: '\\f1b7'
    },
    {
        name: 'Editing',
        icon: '\\f1b7'
    },
    {
        name: 'Text Formatting',
        icon: '\\f1b7'
    }

]


export class AppController extends UIController {
    private icons: IconType[];
    private form: TForm;

    @State()
    private SideBarExpanded: boolean;

    protected InitController() {
        this.SideBarExpanded = true;
        this.icons = [];
        for (let icon in IconLibrary) {
            this.icons.push(IconLibrary[icon])
        }

    }

    public OnBindModel(form: TForm) {
        this.form = form;
    }
    public LoadView() {
        console.log('View Rendered');
        return UIScene(
            HStack(
                VStack(
                    CategoryListView(appsCategoryModel) as any
                )
                    .initial({ minWidth: this.SideBarExpanded ? '1px' : '210px', maxWidth: this.SideBarExpanded ? '1px' : '210px' }).animate({ minWidth: this.SideBarExpanded ? '210px' : '0px', maxWidth: this.SideBarExpanded ? '210px' : '0px' })
                    .width()
                    .backgroundColor('translate')
                    .overflow('hidden'),
                VStack({ alignment: cTopLeading })(
                    HStack({ spacing: 5 })(
                        VStack({ alignment: cLeading })(
                            UIButton(
                                Text('Close')
                            ).action(() => {
                                const statu = this.SideBarExpanded;
                                this.SideBarExpanded = !statu;
                            }),
                            Text('All').fontWeight('bold'),
                            Text(`${this.icons.length} icons`).fontSize('12px').fontWeight('500'),
                        ).paddingLeft('10px')
                    ).backgroundColor('rgb(243,241,246)').borderBottom('1px solid rgb(212,212,212)').height(50).onMouseDown((e) => this.form.StartFormDrag(e)),
                    ScrollView({ axes: cVertical })(
                        Cache(true, () =>
                            HStack({ alignment: cTopLeading, spacing: 10 })(
                                ...ForEach(this.icons)(icon =>
                                    VStack(
                                        Icon(icon.GetCode())
                                            .size(40)
                                            .padding('15px 20px')
                                            .cornerRadius(CornerRadiusTypes.Medium)
                                            .foregroundColor('#666')
                                            .border({ default: 'solid 1px rgb(215,215,215)', focus: '3px solid #0071F4' })
                                            .position(PositionTypes.Absolute)
                                            .left('50%')
                                            .top('40px')
                                            .transform('translate(-50%,-50%)')
                                            .tabIndex(0),
                                        Text(icon.GetTitle())
                                            .position(PositionTypes.Absolute)
                                            .left('50%')
                                            .top('80px')
                                            .padding('0 8px')
                                            .transform('translate(-50%)')
                                            .width('100%')
                                    ).width(112).height(128)/* .backgroundColor('rgb(255,255,255,50%)') */.cornerRadius(CornerRadiusTypes.Medium).marginBottom('10px')
                                )
                            ).wrap('wrap').padding(20)
                        )
                    ).background(Color.white)
                )
            )

        )
    }
}