package algorithm;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class TopologySort {
    public static int v; // 노드의 개수
    public static int e; // 간선의 개수
    public static int[] indegree = new int[100001]; // 진입차수
    public static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>(); // 노드에 연결된 간선 정보

    public static void topologySort() {
        ArrayList<Integer> result = new ArrayList<>(); // 결과
        Queue<Integer> q = new LinkedList<>();

        //  진입차수가 0인 노드를 큐에 삽입
        for (int i = 1; i <= v; i++) {
            if (indegree[i] == 0) {
                q.offer(i);
            }
        }

        // 큐가 빌 때까지 반복
        while (!q.isEmpty()) {
            int current = q.poll(); // 큐에서 원소를 꺼냄
            result.add(current);

            // 해당 원소와 연결된 노드들의 간선 제거(진입차수 -1)
            for (int i = 0; i < graph.get(current).size(); i++) { // 연결된 노드만큼 반복
                indegree[graph.get(current).get(i)] -= 1;

                // 새롭게 진입차수가 0이 되는 노드를 큐에 삽입
                if (indegree[graph.get(current).get(i)] == 0) {
                    q.offer(graph.get(current).get(i));
                }
            }
        }

        // 결과 출력
        result.stream()
                .map(integer -> integer + " ")
                .forEach(System.out::print);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("v");
        v = sc.nextInt();
        System.out.println("e");
        e = sc.nextInt();

        // 그래프 초기화
        for (int i = 0; i <= v; i++) {
            graph.add(new ArrayList<Integer>());
        }

        // 방향 그래프의 모든 간선 정보를 입력 받기graph
        for (int i = 0; i < e; i++) {
            System.out.println("a");
            int a = sc.nextInt();
            System.out.println("b");
            int b = sc.nextInt();

            graph.get(a).add(b); // 정점 A에서 B로 이동 가능

            // 진입 차수를 1 증가
            indegree[b] += 1;
        }

        topologySort();
    }
}
