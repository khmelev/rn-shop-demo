import UIKit
import ReactBrownfield

class ViewController: UIViewController {
  
  override func viewDidLoad() {
    super.viewDidLoad()
    do {
      view = try ReactBrownfieldRootViewManager().loadView(
        moduleName: "BrownfieldRef",
        initialProps: nil,
        launchOptions: nil
      )
    } catch {
      #warning("TODO: Handle React Native loading failures")
    }
  }
}

