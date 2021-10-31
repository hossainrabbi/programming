package first;
import java.util.Scanner;

public class Student {
    public static void main(String args[]){
        int a, b, c;
        Scanner input = new Scanner(System.in);
        
        System.out.print("Inter a First Number: ");
        a = input.nextInt();
        
        System.out.print("Inter a Second Number: ");
        b = input.nextInt();
        
        System.out.print("Inter a Third Number: ");
        c = input.nextInt();
        
        if(a > b && a > c){
            System.out.println("The Bigger Number is " + a);
        } else if(b > c){
            System.out.println("The Bigger Number is " + b);
        } else {
            System.out.println("The Bigger Number is " + c);
        }
    }
}