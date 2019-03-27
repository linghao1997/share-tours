
import wepy from 'wepy'

var changeNavColorState = false;

export function changeNavColor () {
    var navigationbarColor = wx.getStorageSync('navigationbar-color');

    if( navigationbarColor ){
      wx.setNavigationBarColor({
        frontColor:'#ffffff',
        backgroundColor: navigationbarColor,

        success(){
          changeNavColorState = true;
        },
        fail(){
          changeNavColorState = false;
        }
      });
    }
    return changeNavColorState;
}