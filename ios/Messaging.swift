// CalendarManager.swift

import UIKit
import MessageUI

@objc(Messaging)
class Messaging: UIViewController, MFMailComposeViewControllerDelegate {
  let rootController = UIApplication.sharedApplication().keyWindow?.rootViewController
  
  
  @objc func addEvent(test: String) -> Void {
    // get current view controller
    let currentController: UIViewController! = rootController

    // set up mail view controller
    let mailVC = MFMailComposeViewController()
    mailVC.mailComposeDelegate = self;
    mailVC.setSubject("Enter a message");
    
    currentController.presentViewController(mailVC, animated: true, completion: nil)
    
    
    // testing out alert view controller
    
//      let alertController = UIAlertController(title: "iOScreator", message: "test", preferredStyle: UIAlertControllerStyle.Alert)
//      alertController.addAction(UIAlertAction(title:"Dismiss", style: UIAlertActionStyle.Default, handler: nil))
//      
//      currentController.presentViewController(alertController, animated: true, completion: nil)
    
    // testing whether param is recorded
    NSLog(test)
  }
  
  @objc func mailComposeController(controller: MFMailComposeViewController, didFinishWithResult result: MFMailComposeResult, error: NSError?) {
    
    controller.dismissViewControllerAnimated(true, completion: nil)
  }
}