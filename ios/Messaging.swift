// CalendarManager.swift

import UIKit
import MessageUI

@objc(Messaging)
class Messaging: UIViewController, MFMailComposeViewControllerDelegate, MFMessageComposeViewControllerDelegate {
  let rootController = UIApplication.sharedApplication().delegate?.window!!.rootViewController
  
  @objc func call(phoneNumber: String) -> Void {
    if let url = NSURL(string: "tel://\(phoneNumber)") {
      UIApplication.sharedApplication().openURL(url)
    }
  }
  
  @objc func text(name: String, address: String) -> Void {
    let currentController: UIViewController! = rootController

    //set up text message view controller
    let messageVC = MFMessageComposeViewController()
    messageVC.body = "Enter a message";
    messageVC.messageComposeDelegate = self;
    
    currentController.presentViewController(messageVC, animated: false, completion: nil)
  }
  
  @objc func email(name: String, address: String) -> Void {
    let currentController: UIViewController! = rootController

    //set up mail view controller
    let mailVC = MFMailComposeViewController()
    mailVC.setSubject("Enter a message");
    mailVC.mailComposeDelegate = self;
    
    currentController.presentViewController(mailVC, animated: true, completion: nil)
  }
  
  @objc func mailComposeController(controller: MFMailComposeViewController, didFinishWithResult result: MFMailComposeResult, error: NSError?) {
    controller.dismissViewControllerAnimated(true, completion: nil)
  }
  
  @objc func messageComposeViewController(controller: MFMessageComposeViewController, didFinishWithResult result: MessageComposeResult) {
    controller.dismissViewControllerAnimated(true, completion: nil)
  }
}