// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FFF');

if (Ti.Platform.osname == 'iphone') {
	var dialog = Ti.UI.createAlertDialog({
		title: 'Unsupported platform',
		message: 'This example application is only designed for tablet platforms',
		exitOnClose: true
	});
	
	dialog.show();
} else {
	// Create a window with a clickable button in it
	Ti.API.info('Building for tablet');
	
	var win = Ti.UI.createWindow({
		layout: 'vertical',
		backgroundColor: '#FFFFFF'
	});
	
	var button = Ti.UI.createButton({
		title:'Open a popover',
		height:40,
		width:200,
		top:10
	});
	
	win.add(button);
	
	button.addEventListener('click', function() {
		var view = Ti.UI.createView({
			backgroundColor:"white",
			layout:"vertical"
		});
		
		var label = Ti.UI.createLabel({
			height:"auto",
			width:"auto",
			top:20,
			text: "Here is a label at the top"
		});
		view.add(label);
		
		view.add(Ti.UI.createButton({
			title:'Button 1',
			height:40,
			width:200,
			top:10
		}));
		
		view.add(Ti.UI.createButton({
			title:'Button 2',
			height:40,
			width:200,
			top:10
		}));
		
		view.add(Ti.UI.createButton({
			title:'Button 3',
			height:40,
			width:200,
			top:10
		}));
		
		view.add(Ti.UI.createButton({
			title:'Button 4',
			height:40,
			width:200,
			top:10
		}));
		
		view.add(Ti.UI.createButton({
			title:'Button 5',
			height:40,
			width:200,
			top:10
		}));
		
		var uiImage = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "KS_nav_ui.png");
		var viewsImage = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "KS_nav_views.png");
		
		view.add(Ti.UI.createImageView({
			width: 'auto',
			height: 'auto',
			image: uiImage
		}));
		
		view.add(Ti.UI.createImageView({
			width: 'auto',
			height: 'auto',
			image: viewsImage
		}));
		
		if (Ti.Platform.osname == 'ipad') {
			var popover = Ti.UI.iPad.createPopover({ 
			    width:250, 
			    height:100,
			    title: "Yo Yo"
			});
			
			popover.add(view);
			
			Ti.API.info('showing popover');
			popover.show({view:button});
		} else {
			var Popover = require("lib/popup");

			var popup = Popover.popup();
			popup.open();
		}
	});
	
	Ti.API.info('showing window');
	
	win.open();
}
