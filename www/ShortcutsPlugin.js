let Shortcuts = function () {
};

let cordova = window.cordova;

Shortcuts.prototype.supportsDynamic = function (successCallback, errorCallback) {
  if(cordova) {
    cordova.exec(
      successCallback,
      errorCallback,
      'ShortcutsPlugin',
      'supportsDynamic',
      []
    );
  } else {
    console.warn("This platform does not support Android Shortcuts");
  }

};

Shortcuts.prototype.supportsPinned = function (successCallback, errorCallback) {
  if(cordova) {
    cordova.exec(
      successCallback,
      errorCallback,
      'ShortcutsPlugin',
      'supportsPinned',
      []
    );
  } else {
    console.warn("This platform does not support Android Shortcuts");
  }

};

Shortcuts.prototype.setDynamic = function (shortcuts, successCallback, errorCallback) {
  if(cordova) {
    cordova.exec(
      successCallback,
      errorCallback,
      'ShortcutsPlugin',
      'setDynamic',
      shortcuts
    );
  } else {
    console.warn("This platform does not support Android Shortcuts");
  }

};

Shortcuts.prototype.addPinned = function (shortcut, successCallback, errorCallback) {
  if(cordova) {
    cordova.exec(
      successCallback,
      errorCallback,
      'ShortcutsPlugin',
      'addPinned',
      [shortcut]
    );
  } else {
    console.warn("This platform does not support Android Shortcuts");
  }

};

Shortcuts.prototype.getIntent = function (successCallback, errorCallback) {
  if(cordova) {
    cordova.exec(
      successCallback,
      errorCallback,
      'ShortcutsPlugin',
      'getIntent',
      []
    )
  } else {
    console.warn("This platform does not support Android Shortcuts");
  }

}

Shortcuts.prototype.onNewIntent = function (callback, errorCallback) {
  if(cordova) {
    cordova.exec(
      callback,
      errorCallback,
      'ShortcutsPlugin',
      'onNewIntent',
      [typeof (callback) !== 'function']
    )
  } else {
    console.warn("This platform does not support Android Shortcuts");
  }

}

if (!window.plugins) {
  window.plugins = {};
}

if (!window.plugins.Shortcuts) {
  window.plugins.Shortcuts = new Shortcuts();
}
