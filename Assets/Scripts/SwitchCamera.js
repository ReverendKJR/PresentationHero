public var StandardCamera : Camera;
public var OculusRiftCameraLeft : Camera;
public var OculusRiftCameraRight : Camera;
public var Audience1 : Camera;
public var Audience2 : Camera;

function Start () {
	
	StandardCamera.enabled = true;
	OculusRiftCameraLeft.enabled = false;
	OculusRiftCameraRight.enabled = false;
	Audience1.enabled = false;
	Audience2.enabled = false;
	

}

function Update () {
	if (Input.GetKey("q")){
		StandardCamera.enabled = true;
		OculusRiftCameraLeft.enabled = false;
		OculusRiftCameraRight.enabled = false;
		Audience1.enabled = false;
		Audience2.enabled = false;
		}
	if (Input.GetKey("e")){
		StandardCamera.enabled = false;
		OculusRiftCameraLeft.enabled = true;
		OculusRiftCameraRight.enabled = true;
		Audience1.enabled = false;
		Audience2.enabled = false;
		}
	//if (Input.GetKey("1")){
		//StandardCamera.enabled = false;
		//OculusRiftCameraLeft.enabled = false;
		//OculusRiftCameraRight.enabled = false;
		//Audience1.enabled = true;
		//Audience2.enabled = false;
		//}
	//if (Input.GetKey("2")){
		//StandardCamera.enabled = false;
		//OculusRiftCameraLeft.enabled = false;
		//OculusRiftCameraRight.enabled = false;
		//Audience1.enabled = false;
		//Audience2.enabled = true;
		//}
}