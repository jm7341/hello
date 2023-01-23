//% weight=100 color=#00A654 icon="\uf26c" block="디스플레이"
//% groups='["Control", "Show", "Draw", "Delete"]'
namespace Display {
    export enum ShowAlign {
        //% block="왼쪽"
        Left,
        //% block="가운데"
        Centre,
        //% block="오른쪽"
        Right
    }

    export enum LineDirectionSelection {
        //% block="수평"
        horizontal,
        //% block="수직"
        vertical
    }

    export enum FontSelection {
        //% block="일반"
        Normal,
        //% block="크게"
        Big
    }

    //% blockId="Display_set_pixel" block="픽셀 보이기: x %x|y %y"
    //% group="Show"
    //% weight=70 blockGap=8
    //% x.min=0, x.max=127
    //% y.min=0, y.max=63
    //% inlineInputMode=inline
    export function setPixel(x: number, y: number, screen?: 1) {
        kitronik_VIEW128x64.setPixel(x, y);
    }

    //% blockId="Display_clear_pixel" block="픽셀 지우기: x %x|y %y"
    //% group="Delete"
    //% weight=70 blockGap=8
    //% x.min=0, x.max=127
    //% y.min=0, y.max=63
    //% inlineInputMode=inline
    export function clearPixel(x: number, y: number, screen?: 1) {
        kitronik_VIEW128x64.clearPixel(x, y);
    }

    //% blockId=Display_set_font_size
    //% block="글자 크기: %fontSize"
    //% group="Control"
    //% weight=80 blockGap=8
    export function setFontSize(fontSize: FontSelection, screen?: 1) {
        kitronik_VIEW128x64.setFontSize(fontSize);
    }

    //% blockId="Display_show" block="보이기: %s || 줄번호: %line | 정렬: %displayShowAlign | 글자크기: %fontSize"
    //% weight=80 blockGap=8
    //% group="Show"
    //% expandableArgumentMode="enable"
    //% inlineInputMode=inline
    //% line.min=1 line.max=8
    export function show(inputData: any, line?: number, displayShowAlign?: ShowAlign, fontSize?: FontSelection, screen?: 1) {
        kitronik_VIEW128x64.show(inputData, line, displayShowAlign, fontSize);
    }

    //% blockId="Display_clear_line" block="줄 지우기: %line"
    //% weight=80 blockGap=8
    //% group="Delete"
    //% expandableArgumentMode="enable"
    //% inlineInputMode=inline
    //% line.min=1 line.max=8
    export function clearLine(line: number, screen?: 1) {
        kitronik_VIEW128x64.clearLine(line);
    }

    //% blockId="Display_draw_line" block="그리기: 방향 %lineDirection | 줄 길이 %len 시작점: x %x|y %y"
    //% weight=72 blockGap=8
    //% group="Draw"
    //% x.min=0, x.max=127
    //% y.min=0, y.max=63
    //% len.min=-127, len.max=127
    //% inlineInputMode=inline
    export function drawLine(lineDirection: LineDirectionSelection, len: number, x: number, y: number, screen?: 1) {
        kitronik_VIEW128x64.drawLine(lineDirection, len, x, y);
    }

    //% blockId="Display_draw_rect" block="사각형 그리기: 가로 %width| 세로: %height|high 위치: x %x|y %y"
    //% weight=71 blockGap=8
    //% group="Draw"
    //% inlineInputMode=inline
    //% width.min=1 width.max=127
    //% height.min=1 height.max=63
    //% x.min=0 x.max=127
    //% y.min=0 y.max=63
    export function drawRect(width: number, height: number, x: number, y: number, screen?: 1) {
        kitronik_VIEW128x64.drawRect(width, height, x, y);
    }

    //% blockId="Display_clear" block="회면 지우기"
    //% group="Delete"
    //% weight=63 blockGap=8
    export function clear(screen?: number) {
        kitronik_VIEW128x64.clear(screen);
    }

    //% blockId=Display_display_on_off_control
    //% block="화면끄기 %displayOutput=on_off_toggle| 실행"
    //% group="Control"
    //% expandableArgumentMode="toggle"
    //% weight=80 blockGap=8
    export function controlDisplayOnOff(displayOutput: boolean, screen?: 1) {
        kitronik_VIEW128x64.controlDisplayOnOff(displayOutput);
    }

    //% blockId=on_off_toggle
    //% block="$on"
    //% on.shadow="toggleOnOff"
    //% blockHidden=true
    export function onOff(on: boolean): boolean {
        return on;
    }


    //////////////////////////////////////
    //
    //      Plotting blocks
    //
    //////////////////////////////////////

    //% blockId="Display_plot_request"
    //% group="Draw"
    //% block="그래프 그리기 - 최대높이: %plotVariable| 까지"
    //% weight=100 blockGap=8
    export function plot(plotVariable: number, screen?: 1) {
        kitronik_VIEW128x64.plot(plotVariable);
    }


    //////////////////////////////////////
    //
    //      Expert blocks
    //
    //////////////////////////////////////

    /**
     * Update or refresh the screen if any data has been changed.
     * @param screen is screen selection when using multiple screens
     */
    //% group="Control"
    //% blockId="Display_draw" block="화면 갱신하기"
    //% weight=63 blockGap=8
    export function refresh(screen?: 1) {
        kitronik_VIEW128x64.refresh();
    }


    //% group="Control"
    //% blockId="Display_invert_screen" block="흑백반전 %output=on_off_toggle"
    //% weight=62 blockGap=8
    export function invert(output: boolean, screen?: 1) {
        kitronik_VIEW128x64.invert(output);
    }
}
