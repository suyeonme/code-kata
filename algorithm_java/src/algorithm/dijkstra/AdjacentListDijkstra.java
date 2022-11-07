package algorithm.dijkstra;

import java.util.ArrayList;
import java.util.Arrays;

// 인접 행렬을 사용
public class AdjacentListDijkstra {

    static final int INF = 9999999; // 무한대

    static class Node implements Comparable<Node> {
        int to, weight;

        public Node(int to, int weight) {
            this.to = to;
            this.weight = weight;
        }

        @Override
        public int compareTo(Node o) {
            return this.weight - o.weight;
        }
    }

    public static void main(String[] args) {
        int V = 5;  // 정점의 수
        int E = 6;  // 간선의 수

        // 인접리스트 초기화
        ArrayList<ArrayList<Node>> adjList = new ArrayList<>();
        for (int i = 0; i <= V; i++) {
            adjList.add(new ArrayList<>());
        }

        // 인접리스트 입력
        adjList.get(5).add(new Node(1, 1));
        adjList.get(1).add(new Node(5, 1));

        adjList.get(1).add(new Node(2, 2));
        adjList.get(2).add(new Node(1, 2));

        adjList.get(1).add(new Node(3, 3));
        adjList.get(3).add(new Node(1, 3));

        adjList.get(2).add(new Node(3, 4));
        adjList.get(3).add(new Node(2, 4));

        adjList.get(2).add(new Node(4, 5));
        adjList.get(4).add(new Node(2, 5));

        adjList.get(3).add(new Node(4, 6));
        adjList.get(4).add(new Node(3, 6));


        int[] dist = new int[V + 1]; // 최단 거리 저장
        Arrays.fill(dist, INF); // 무한대로 초기화
        dist[1] = 0; // 시작 노드 초기화
        boolean[] visited = new boolean[V + 1];  // 노드 방문 여부 저장

        for (int i = 1; i <= V; i++) {
            int nodeValue = Integer.MAX_VALUE;
            int nodeIdx = 0;

            // 인접 노드의 최단 거리 갱신
            for (int j = 1; j < V + 1; j++) {
                if (!visited[j] && dist[j] < nodeValue) {
                    nodeValue = dist[j];
                    nodeIdx = j;
                }
            }

            // 방문 처리
            visited[nodeIdx] = true;

            // 다른 노드를 거쳐가는 비용이 더 적은지 확인
            for (Node n : adjList.get(nodeIdx)) {
                if (dist[n.to] > dist[nodeIdx] + n.weight) {
                    dist[n.to] = dist[nodeIdx] + n.weight;
                }
            }
        }

        // 결과 출력
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= V; i++) {
            sb.append(dist[i]).append(" ");
        }
        System.out.println(sb);
    }
}
