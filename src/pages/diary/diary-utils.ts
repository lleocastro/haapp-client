import * as _ from 'lodash';

export class DiaryUtils {
  constructor() {}

  static likesLoad(dataLikeable, currentUser) {
    if (dataLikeable.length) {

      dataLikeable.forEach((data: any) => {

        if (data.likes && data.likes.length) {
          data.likes_counter = _.size(data.likes);

          let userIsLiked = _.findIndex(data.likes, (like: any) => {
            return like.user_id == currentUser.user_id;
          });

          if (userIsLiked != -1) {
            data.liked = true;
          } else {
            data.liked = false;
          }

        }

      });

    }
  }

  static likeToggle(dataLikeable, userComparable, callback) {
    let liked = _.findIndex(dataLikeable.likes, (like: any) => {
      return like.user_id == userComparable.user_id;
    });

    if (!dataLikeable.likes_counter) {
      dataLikeable.likes_counter = 0;
    }

    if (liked == -1) {
      dataLikeable.likes.push({user_id: userComparable.user_id});
      dataLikeable.likes_counter++;
      dataLikeable.liked = true;
    } else {
      _.remove(dataLikeable.likes, (like: any) => {
        return like.user_id == userComparable.user_id;
      });

      dataLikeable.likes_counter--;
      dataLikeable.liked = false;
    }

    console.log(dataLikeable);
  }

  static openManipulateOptions(actionSheetInstance, data, callbacks) {
    data.openedOptions = true;

    let actionSheet = actionSheetInstance.create({
      buttons: [
        {
          text: 'Apagar',
          icon: 'ios-trash-outline',
          role: 'destructive',
          handler: () => {
            data.openedOptions = false;
            callbacks.delete();
          }
        }, {
          text: 'Denunciar',
          icon: 'ios-warning-outline',
          role: 'destructive',
          handler: () => {
            data.openedOptions = false;
            callbacks.report();
          }
        }, {
          text: 'Cancelar',
          icon: 'ios-close-circle-outline',
          role: 'cancel',
          handler: () => {
            data.openedOptions = false;
            callbacks.cancel();
          }
        }
      ]
    });

    actionSheet.present();
  }

}
