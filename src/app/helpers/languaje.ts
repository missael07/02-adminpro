
export class lanjuage{
    public registerTitle = localStorage.getItem('lan') === 'ES' ? 'Registrarse' : 'Register';
    public registerSubtitle = localStorage.getItem('lan') === 'ES' ? 'Crea tu cuenta y disfruta' : 'Create your account and enjoy';
    public nameError = localStorage.getItem('lan') === 'ES' ? 'El nombre es requerido' : 'Required Name';
    public name = localStorage.getItem('lan') === 'ES' ? 'Nombre' : 'Name';
    public passwordsError = localStorage.getItem('lan') === 'ES' ? 'Las contraseñas deben coincidir' : 'Passwords must match';
    public passwordError = localStorage.getItem('lan') === 'ES' ? 'La contraseña es requerida' : 'Required Password';
    public password = localStorage.getItem('lan') === 'ES' ? 'Contraseña' : 'Password';
    public confirmPasswordError = localStorage.getItem('lan') === 'ES' ? 'La confirmación de la contraseña es requerida' : 'Required Confirm Password';
    public confirmPassword = localStorage.getItem('lan') === 'ES' ? 'Confirmar Contraseña' : 'Confirm Password';
    public emailError = localStorage.getItem('lan') === 'ES' ? 'El correo elctronico es requerido' : 'Required Email';
    public email = localStorage.getItem('lan') === 'ES' ? 'Correo Electronico' : 'Email';
    public termsError = localStorage.getItem('lan') === 'ES' ? 'Debe de aceptar los terminos de uso' : 'You must agree with Terms';
    public terms = localStorage.getItem('lan') === 'ES' ? 'Acepto los Terminos y Condiciones' : 'Agree with Terms';
    public rememberMe = localStorage.getItem('lan') === 'ES' ? 'Recordar Usuario' : 'Remember me';
    public forgotPassword = localStorage.getItem('lan') === 'ES' ? 'Olvidaste tu contraseña?' : 'Forgot Password?';
    public dntHveAccount = localStorage.getItem('lan') === 'ES' ? 'No tienes cuenta?' : `Don't Have an account?`;
    public hveAccount = localStorage.getItem('lan') === 'ES' ? 'Ya tienes cuenta?' : `Already Have an account?`;
    public signUp = localStorage.getItem('lan') === 'ES' ? 'Crear Cuenta' : 'Sign Up';
    public signIn = localStorage.getItem('lan') === 'ES' ? 'Iniciar Sesión' : 'Sign In';
    public recoverPassword = localStorage.getItem('lan') === 'ES' ? 'Recuperar Contraseña' : 'Recover Password';
    public instructions = localStorage.getItem('lan') === 'ES' ? 'Ingresa tu Correo electronico y se te enviarán las instrucciones' : 'Enter your Email and instructions will be sent to you!';
    public reset = localStorage.getItem('lan') === 'ES' ? 'Recuperar' : 'Reset';
    public logOut = localStorage.getItem('lan') === 'ES' ? 'Cerrar Sesión' : 'LogOut';
    public profile = localStorage.getItem('lan') === 'ES' ? 'Perfil' : 'Profile';
    public accountSettings = localStorage.getItem('lan') === 'ES' ? 'Configuración de la cuenta' : 'Account Settings';



    
}