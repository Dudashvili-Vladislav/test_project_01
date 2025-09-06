FROM denoland/deno:2.0.0 as builder

WORKDIR /tmp/source
COPY . .
RUN deno install --allow-scripts=npm:esbuild@0.15.18,npm:@swc/core@1.7.35
RUN deno task build

FROM debian:stable-slim

COPY --from=builder /tmp/source/dist /tmp

ENTRYPOINT [ "cp", "-a" ]
CMD [ "/tmp/.", "/app/" ]
