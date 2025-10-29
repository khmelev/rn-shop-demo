import UIKit
import ReactBrownfield

class ViewController: UIViewController {
  
  override func viewDidLoad() {
    super.viewDidLoad()
    do {
      view = ReactBrownfieldRootViewManager.shared.loadView(
        moduleName: "main",
        initialProps: nil,
        launchOptions: nil
      )
    } catch {
      #warning("TODO: Handle React Native loading failures")
    }
  }
}

