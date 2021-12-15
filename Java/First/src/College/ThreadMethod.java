package College;

class A extends Thread {
    public void run() {
        System.out.println("Thread");
    }
}

class B extends Thread {
    public void run() {
        System.out.println("Thread 2");
    }
}

public class ThreadMethod {
    public static void main(String[] args) {
        A a1 = new A();
        B b1 = new B();
        
        a1.start();
        b1.start();
    }
}
