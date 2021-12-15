package College;

// 0, 1, 1, 2, 3, 5, 8, ..... , n
public class FiboSirise {
    public static void main(String[] args) {
        int first = 0, second = 1, fibo, n = 8;
        System.out.print(first + " " + second + " ");
        
        for(int i = 0; i <= n; i++) {
            fibo = first + second;
            System.out.print(fibo + " ");
            
            first = second;
            second = fibo;
        }
    }
}
