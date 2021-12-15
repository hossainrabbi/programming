package CollegeFinalTest;

public class Fibonacci {
    public static void main(String[] args) {
        int f1 = 0, f2 = 1, fibo;
        
        for(int i = 3; i <= 10; i++) {
            fibo = f1 + f2;
            System.out.print(fibo + " ");
            f1 = f2;
            f2 = fibo;
        }
    }
}
