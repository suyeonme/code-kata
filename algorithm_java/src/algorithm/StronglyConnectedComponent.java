package algorithm;

import java.util.ArrayList;
import java.util.Stack;

public class StronglyConnectedComponent {
    static final int MAX = 100001;
    static int id = 0; // 노드의 고유값
    static int[] d = new int[MAX]; // 노드의 고유값
    static boolean[] finished = new boolean[MAX]; // 현재 특정 노드에 대한 DFS가 끝났는지 여부
    static ArrayList<ArrayList<Integer>> SCC = new ArrayList<ArrayList<Integer>>();
    static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();
    static Stack<Integer> stack = new Stack<>();

    // 정점의 개수만큼 DFS 실행
    static int dfs(int x) {
        d[x] = ++id; // 노드마다 고유값 할당
        stack.push(x); // 스택에 자기 자신을 삽입
        int parent = d[x];

        for (int i = 0; i < graph.get(x).size(); i++) {
            int y = graph.get(x).get(i); // 인접노드;
            if (d[y] == 0) {
                // 방문하지 않은 노드
                parent = Math.min(parent, dfs(y)); // 더 작은 값으로 부모값 갱신
            } else if (!finished[y]) {
                // 현재 처리중인 노드
                parent = Math.min(parent, d[y]);
            }
        }

        if (parent == d[x]) {
            // 부모노드가 자기 자신인 경우
            ArrayList<Integer> scc = new ArrayList<Integer>();
            while (true) {
                int t = stack.peek();
                stack.pop();
                scc.add(t);
                finished[t] = true;
                if (t == x) break; // 자기 자신이 부모인 경우
            }
            SCC.add(scc);
        }
        return parent;
    }

    public static void main(String[] args) {
        final int V = 11;

        for (int i = 0; i < V + 1; i++) {
            graph.add(new ArrayList<>());
        }

        graph.get(1).add(2);
        graph.get(2).add(3);
        graph.get(3).add(1);
        graph.get(4).add(2);
        graph.get(4).add(5);
        graph.get(5).add(7);
        graph.get(6).add(5);
        graph.get(7).add(6);
        graph.get(8).add(5);
        graph.get(8).add(9);
        graph.get(8).add(10);
        graph.get(8).add(9);
        graph.get(9).add(10);
        graph.get(10).add(11);
        graph.get(11).add(3);
        graph.get(11).add(8);

        for (int i = 1; i <= V; i++) {
            if (d[i] == 0) {
                dfs(i);
            }
        }

        System.out.println("scc의 갯수:" + SCC.size());

        for (int i = 0; i < SCC.size(); i++) {
            System.out.println(i + "번째 SCC: ");
            for (int j = 0; j < SCC.get(i).size(); j++) {
                System.out.println(SCC.get(i).get(j));
            }
        }
    }
}
