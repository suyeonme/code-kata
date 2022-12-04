package algorithm;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class NetworkFlow {
    static int V = 7;
    public static int[][] capacity = new int[V][V]; // 용량
    public static int[][] flow = new int[V][V]; // 흐르는 유량
    public static int[] visited = new int[V]; // 노드 방문 여부
    public static int[][] graph = new int[V][V];

    public static boolean bfs(int start, int end) {
        Arrays.fill(visited, -1); // 모든 정점을 방문하지 않은 상태로 초기화
        Queue<Integer> q = new LinkedList<Integer>();
        q.add(start);

        while (!q.isEmpty()) {
            int x = q.poll();
            int[] target = graph[x];
            for (int y : target) {
                // 방문하지 않은 노드중 용량이 흐를 수 있는(남은) 경우
                if (visited[y] == -1 && (capacity[x][y] - flow[x][y]) > 0) {
                    visited[y] = x; // 방문 처리, 경로 기억
                    q.add(y);
                    if (y == end) break;   // 도착지에 도달
                }
            }
        }
        return visited[end] != -1;
    }

    public static int EdmondsKarp(int start, int end) {
        int total = 0;
        while (bfs(start, end)) {
            int INF = Integer.MAX_VALUE;
            // 거꾸로 최소 유량 탐색
            for (int i = end; i != start; i = visited[i]) {
                int x = visited[i];
                INF = Math.min(INF, (capacity[x][i]) - flow[x][i]);
            }

            // 최소 유량 추가
            for (int i = end; i != start; i = visited[i]) {
                int x = visited[i];
                flow[x][i] += INF;
                flow[i][x] -= INF; // 음의 유량 탐색
            }
            total += INF;
        }
        return total;
    }

    public static void main(String[] args) {
        graph[1][2] = 2;
        graph[2][1] = 2;
        capacity[1][2] = 14;

        graph[1][4] = 4;
        graph[4][1] = 4;
        capacity[1][4] = 12;

        graph[2][3] = 3;
        graph[3][2] = 3;
        capacity[2][3] = 5;

        graph[2][4] = 4;
        graph[4][2] = 4;
        capacity[2][4] = 4;

        graph[2][5] = 5;
        graph[5][2] = 5;
        capacity[2][5] = 6;

        graph[2][6] = 6;
        graph[6][2] = 6;
        capacity[2][6] = 10;

        graph[3][6] = 6;
        graph[6][3] = 6;
        capacity[3][6] = 8;

        graph[4][5] = 5;
        graph[5][4] = 5;
        capacity[4][5] = 11;

        graph[5][3] = 3;
        graph[3][5] = 5;
        capacity[5][3] = 4;

        graph[5][6] = 6;
        graph[6][5] = 6;
        capacity[5][6] = 7;

        int result = EdmondsKarp(1, 6);
        System.out.println("최대 유량: " + result);
    }
}
