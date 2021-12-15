public class Fibonacci {
    public static void main(String args[]) {
        int f0 = 0, f1 = 1, fibo;
        
        for(int i = 0; i <= 10; i++) {
            fibo = f0 + f1;
            System.out.println(fibo);
            
            f0 = f1;
            f1 = fibo;
        }
    }
}
